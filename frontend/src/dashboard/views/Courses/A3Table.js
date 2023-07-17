import React, { useEffect, useState } from "react";
import "../../styling/Table.css";
import axios from "axios";
///allstudent
const A3Table = () => {
    const[grades,setGrades]=useState([]);
    const[course,setCourse]= useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:5000/admin/allstudentmaterial').then((response)=>{
            setCourse(response.data);
            console.log(response.data);
        })
    }
    ,[]);
    useEffect(()=>{
        axios.get('http://localhost:5000/admin/allstudent').then((response)=>{
            setGrades(response.data);
            console.log(response.data);
        })
    }
    ,[]);
    console.log(course);
    console.log(grades);

    
  return (
    <div className="a3-table">
      <table>
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
             <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الاول</tr>
              <tr>
                <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الثاني </tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الثالث</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الرابع</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الخامس</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر السادس</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
             <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر السابع</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
              <th>
              <tr style={ {display:"flex",justifyContent:"center"}}>المقرر الثامن</tr>
              <tr>
              <th className="child">اعمال السنه</th>
                <th  className="child">عملي</th>
                <th  className="child">نظري</th>
                <th  className="child">مجموع</th>
                <th  className="child">تقدير</th>
              </tr>
            </th>
          </tr>
       
          
        </thead>
        <tbody  className="table-body" >
           {grades.map((info)=>(
                 

            <tr>
            <th>
                 
               <tr>{info.student_national_id}</tr>
               </th>
               <th>
                 
                 <tr>{info.student_name}</tr>
                 
                    </th>
            <th >
             <tr style={ {display:"flex",justifyContent:"center"}}>{info.material_name}</tr>
              <tr>
                <th className="child">{info.year_work}</th>
                <th  className="child">{info.practical_exams_grade}</th>
                <th  className="child">{info.written_exams_grade}</th>
                <th  className="child">{info.full_grade}</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
            <tr style={ {display:"flex",justifyContent:"center"}}>{info.material_name}</tr>
              <tr>
                <th className="child">{info.year_work}</th>
                <th  className="child">{info.practical_exams_grade}</th>
                <th  className="child">{info.written_exams_grade}</th>
                <th  className="child">{info.full_grade}</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
            <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th>
              </tr>
            </th>
             <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th> 
              </tr>
            </th>
             <th >
              <tr style={ {display:"flex",justifyContent:"center"}}>coulmn 1</tr>
              <tr>
                <th className="child">Column 2</th>
                <th  className="child">Column 3</th>
                <th  className="child">Column 4</th>
                <th  className="child">Column 5</th>
                <th  className="child">Column 5</th> 
              </tr>
            </th>
          </tr>
            ))}
          
        
        </tbody>
      </table>
    </div>
  );
};

export default A3Table;
