import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";

const admin = express();
admin.use(express.Router());

admin.get('/allstudent',
    async (req, res) => {
        try {
            const result = await query('SELECT student.student_name , student.student_national_id , material.material_name , material.material_code , material.material_sim , material.material_status , grade.year_work , grade.full_grade , grade.practical_exams_grade	, grade.written_exams_grade FROM students AS student INNER JOIN grade ON student.student_id = grade.student_id INNER JOIN material ON grade.material_id = material.material_id');
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

admin.get('/getmaterial/:id',
    async (req, res) => {
        try {
            const result = await query('SELECT material.* , grade.year_work , grade.full_grade , grade.practical_exams_grade	, grade.written_exams_grade , students.student_name , students.student_national_id FROM material INNER JOIN grade ON material.material_id = grade.material_id INNER JOIN students ON grade.student_id = students.student_id WHERE material.material_id = ?', [req.params.id]);
            if (result.length > 0) {
                res.status(200).send(result);
            }else{
                res.status(404).send("Not Found");
            }

        } catch (error) {
            console.log(error);
        }
    }
);

admin.put('/updategrades', (req, res) => {
    try {
        const { material_id, student_id, year_work, full_grade, practical_exams_grade, written_exams_grade } = req.body;
        
        const sqlUpdate = "UPDATE grade SET year_work = ? , full_grade = ? , practical_exams_grade = ? , written_exams_grade = ? WHERE material_id = ? AND student_id = ?";
        query(sqlUpdate, [year_work, full_grade, practical_exams_grade, written_exams_grade, material_id, student_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send("Updated");
            }

        });
    } catch (error) {
        console.log(error);
    }
});









export default admin;