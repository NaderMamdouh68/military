import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import multer from "multer";
import path from "path";
import fs from "fs";
import csv from "fast-csv";
import mysql from "mysql";
import e from "express";
import bcrypt from "bcrypt";


const admin = express();
admin.use(express.Router());

admin.get('/allstudent',
    async (req, res) => {
        try {
            const result = await query('SELECT student.* , material.material_name , material.material_code , material.material_sim , material.material_status , grade.year_work , grade.full_grade , grade.practical_exams_grade	, grade.written_exams_grade FROM students AS student INNER JOIN grade ON student.student_id = grade.student_id INNER JOIN material ON grade.material_id = material.material_id');
            res.status(200).send(result);


        } catch (error) {
            console.log(error);
        }
    }
);


admin.get('/allmaterial',
    async (req, res) => {
        try {
            const result = await query('SELECT * FROM material');
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);

admin.get('/studentmaterial',
    async (req, res) => {
        try {
            const result = await query('SELECT material.*  , students.* FROM material INNER JOIN stdMat ON material.material_id = stdMat.material_id INNER JOIN students ON stdMat.student_id = students.student_id');
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);
admin.get('/allstudentmaterial',
    async (req, res) => {
        try {
            const result = await query('SELECT material.*  , students.* , stdmat.* FROM stdmat INNER JOIN material ON stdmat.material_id = material.material_id INNER JOIN students ON stdmat.student_id = students.student_id');
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);



admin.get('/getmaterial/:id',
    async (req, res) => {
        try {

            const result = await query('SELECT grade.* , material.* , students.* FROM grade INNER JOIN material ON grade.material_id = material.material_id INNER JOIN students ON grade.student_id = students.student_id WHERE grade.material_id = ?', [req.params.id]);

            if(result.length > 0){
                return res.status(200).send(result);
            }else{
                return res.status(404).send("Not Found");
            }

            



        } catch (error) {
            console.log(error);
        }
    }
);

admin.put('/updategrade',
    async (req, res) => {
        try {
            console.log(req.body);
            const student_id = req.body.student_id;
            const material_id = req.body.material_id;

            const sql = 'UPDATE grade SET year_work = ? , full_grade = ? , practical_exams_grade = ? , written_exams_grade = ? ,status = ? WHERE material_id = ? AND student_id = ?';

            const result = await query(sql, [req.body.year_work, req.body.full_grade, req.body.practical_exams_grade, req.body.written_exams_grade, req.body.status, material_id, student_id]);

            if (result.affectedRows > 0) {
                res.status(200).send("Updated");
            } else {
                res.status(404).send("Not Found");
            }

        } catch (error) {
            console.log(error);
        }

    }
);

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/csv')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }

});

let upload = multer({ storage: storage });


admin.put('/uploadcsv', upload.single('file'),
    async (req, res) => {
        try {
            uploadCSV(req.file.path);

             


            res.status(200).send("Uploaded");
        } catch (error) {
            console.log(error);
        }
    }
);


function uploadCSV(path){
    let stream = fs.createReadStream(path);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", async function () {
            csvData.shift();
            console.log(csvData);
            
            const sql = 'INSERT INTO grade (year_work ,full_grade ,practical_exams_grade ,written_exams_grade, student_name ,material_name,status ,material_id ,student_id ) VALUES ?';
            await query(sql, [csvData], (err, result) => {
                if (err){
                    return console.log(err);
                     
                }else{
                    return console.log(result);
                }
            }
            );
            
        });
    stream.pipe(csvStream);



        
}


admin.get('/getallgrade',
    async (req, res) => {
        try {
            const result = await query('SELECT students.* , material.* , grade.* FROM grade INNER JOIN students ON grade.student_id = students.student_id INNER JOIN material ON grade.material_id = material.material_id');
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);

admin.get('/getstudentmaterial/:id',
    async (req, res) => {
        try {
            const result = await query('SELECT material.*  , students.* FROM material INNER JOIN stdMat ON material.material_id = stdMat.material_id INNER JOIN students ON stdMat.student_id = students.student_id WHERE material.material_id = ?', [req.params.id]);
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);

admin.get('/getallstudentmaterialgrade',
    async (req, res) => {
        try {
            const result = await query('SELECT material.*  , students.* , grade.* FROM grade INNER JOIN material ON grade.material_id = material.material_id INNER JOIN students ON grade.student_id = students.student_id');
            res.status(200).send(result);

        } catch (error) {
            console.log(error);
        }
    }
);

admin.post('/login',
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage("email must be a valid email").normalizeEmail(),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }

            const user = await query("SELECT * FROM admin WHERE email = ?", [req.body.email]);
            if (user.length === 0) {
                error.push({ msg: "Admin Does Not Exist" });
                return res.status(400).json({ login: false, errors: error });
            }

            const checkPassword = await  bcrypt.compare(req.body.password, user[0].password);
            if (!checkPassword) {
                error.push({ msg: "Password is incorrect" });
                return res.status(400).json({ login: false, errors: error });
            }

            res.status(200).json({ login: true, user: user[0] });



        } catch (error) {
            console.log(error);
        }
    }
    
);



export default admin;