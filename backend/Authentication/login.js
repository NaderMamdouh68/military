import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import user from '../MiddleWare/checkStudent.js';


const auth = express();
auth.use(express.Router());





const key = "secretkey";



auth.post('/login',
    body('email').notEmpty().withMessage('email is required'),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 chars long!"),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }



            const user = await query("SELECT * FROM students WHERE email = ?", [req.body.email]);
            if (user.length === 0) {
                error.push({ msg: "Student Does Not Exist" });
                return res.status(400).json({ login: false, errors: error });
            }



            const checkpassword = await bcrypt.compare(req.body.password, user[0].password);


            if (!checkpassword) {
                error.push({ msg: "Password is incorrect" });
                return res.status(400).json({ login: false, errors: error });
            }

            delete user[0].password;
            
            const payload = {
                student_id: user[0].student_id,
                national_id: user[0].national_id,
                student_name: user[0].student_name,
            };
            const token =jwt.sign(payload, key);
            req.session.token ="Bearer "+ token;
            res.status(200).json({ login: true, token: token });
            // res.status(200).cookie("token",`Bearer ${token}`, { httpOnly: true }).json({ login: true });
        } catch (err) {
            
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    });

auth.get('/logout',
    user,
    async (req, res) => {
        try {
            req.session.destroy();
            res.status(200).json({ login: false, msg: "logout" });
        } catch (err) {
            
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
    });

auth.post('/checklogin',
    async (req, res) => {
        res.status(200).json(true);
    });

export default auth;