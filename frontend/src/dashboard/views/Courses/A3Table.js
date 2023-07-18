import React, { useEffect, useState } from "react";
import "../../styling/Table.css";
import axios from "axios";
///allstudent
const A3Table = () => {
  const [grades, setGrades] = useState([]);
  const [course, setCourse] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:5000/admin/allstudentmaterial').then((response) => {
      setCourse(response.data);
      console.log(response.data);
    })
  }
    , []);
  useEffect(() => {
    axios.get('http://localhost:5000/admin/allstudent').then((response) => {
      setGrades(response.data);
      console.log(response.data);
     
    })
  }
    , []);
  console.log(course);
  console.log(grades);


  return (
    <div className="a3-table">
      <table style={{ textAlign: "center" }}>
        <thead className="table-header">

          <tr>
            <th>

              <tr className="info">رقم الطالب</tr>
              <tr>الرقم القومي</tr>
            </th>
            <th>

              <tr className="info">رقم الجلوس</tr>
              <tr>اسم الطالب</tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الاول</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الثاني </tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الثالث</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الرابع</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر الخامس</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر السادس</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={{ display: "flex", justifyContent: "center" }}>المقرر السابع</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th className="child">عملي</th>
                <th className="child">نظري</th>
                <th className="child">مجموع</th>
                <th className="child">تقدير</th>
              </tr>
            </th>
            <th>
              <tr style={{ display: "flex", justifyContent: "center" }}>التقدير الكلي</tr>
            </th>
          </tr>


        </thead>
        <tbody className="table-body" >
        {grades.map((info) => (            

            <tr>

              <th>
                <tr>{info.student_national_id}</tr>
              </th>
              <th>
                <tr>{info.student_name}</tr>
              </th>
              {grades.map((info2) => {
                if (info.student_id === info2.student_id)
                return (

              <th>
                <tr style={{ display: "flex", justifyContent: "center" }}>{info2.material_name}</tr>
                <tr>
                  <th className="child">{info2.year_work}</th>
                  <th className="child">{info2.practical_exams_grade}</th>
                  <th className="child">{info2.written_exams_grade}</th>
                  <th className="child">{info2.full_grade}</th>
                  <th className="child">Grade</th>
                </tr>
                
              </th>
                )
              })}
          
             
           
              <th >
                <tr style={{ display: "flex", justifyContent: "center" }}>GPA</tr>

              </th>
              
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
};

export default A3Table;
