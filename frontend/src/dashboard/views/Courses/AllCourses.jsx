import React, { useEffect, useState } from 'react'
import "../../styling/Home.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
const AllCourses = () => {
    const [courses, setCourses] = useState([

    ]);
    
    useEffect(() => {
        axios.get("http://localhost:5000/admin/allmaterial")
          .then((resp) => {
            console.log(resp.data);
            setCourses(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      
  return (
    <div className='container'>
      <h2 className='title'>اختر  الماده</h2>
        <div className="courses-grid">
            <div className="first">
                <h3>مواد الترم الاول</h3>
                <div className="courses">
                {courses.map((course) => {
  if (course.material_sim === 1) {
    return <Link to={`allGrade/${course.material_id}`}>{course.material_name}</Link>;
  }
})}

                </div>
                
            </div>
                <div className="second"> 
                    <h3>مواد الترم الثاني</h3>
                </div>
            </div> 
    </div>
  )
}

export default AllCourses
