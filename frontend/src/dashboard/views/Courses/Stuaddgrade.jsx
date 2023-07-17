import DataTable from 'react-data-table-component';
import '../../styling/dashboard.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthUser } from '../../../assets/helper/Storage';
import axios from 'axios';
import {CSVLink} from 'react-csv';
import AllCourses from './AllCourses';


const Stuaddgrade = () => {
 const {id}= useParams();
 const[csvData,setCsvData] = useState([]);
 const [course,setCourse] = useState([]);
  const [grade,setGrade] = useState([]);
  const [material,setMaterial] = useState([]);
  const [allCourse,setAllCourse] = useState([]);
  const [error,setError] = useState('');
useEffect(()=>{
  axios.get(`http://localhost:5000/admin/getallgrade`).then((resp)=>{
    console.log(resp);
    setGrade(resp.data);
  })

  axios.get(`http://localhost:5000/admin/allstudentmaterial`).then((resp)=>{
    console.log(resp);
    setAllCourse(resp.data);
    setCourse(resp.data);
  }
  ).catch((err)=>{
    console.log(err);
  }
  )
  axios.get(`http://localhost:5000/admin/allmaterial`).then((resp)=>{
    console.log(resp);
    setMaterial(resp.data);
  }
  ).catch((err)=>{
    console.log(err);
  }
  )


  
},[])

const data = course.map((item) => ({
  year_work: 0,
  full_grade: 0,
  practical_exams_grade: 0,
  written_exams_grade: 0,
  student_name: item.student_name,
  material_name: item.material_name,
  status: 0,
  material_id: item.material_id,
  student_id: item.student_id,
  
}));

const header = [
  { 
    label: "year_work",
    key: "year_work"
  },
  {
    label: "full_grade",
    key: "full_grade"
  },
  {
    label: "practical_exams_grade",
    key: "practical_exams_grade"
  },
  {
    label: "written_exams_grade",
    key: "written_exams_grade"
  },
  {
    label: "student_name",
    key: "student_name"
  },
  {
    label: "material_name",
    key: "material_name"
  },
  {
    label: "status",
    key: "status"
  },
  {
    label: "material_id",
    key: "material_id"
  },
  {
    label: "student_id",
    key: "student_id"
  },
];
  


const csvReport = {
  filename: "addGrade.csv",
  headers: header,
  data: data
};

  
    const handleUpdate = (i)=>{
      console.log(data);
      console.log(csvData);
      try{
        const formData = new FormData();
        formData.append('file', csvData);
        axios.put("http://localhost:5000/admin/uploadcsv" ,formData ).then((resp)=>{
          console.log(resp);
          window.location.reload();
        }
        )
        .catch((err)=>{
          console.log(err);
          setError(err.data);
        }
        )
      }catch(err){
        console.log(err);
        setError(err.data);
      }
    }
      
    

  // Pagination logic
const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 5;
const lastIndex = recordsPerPage * currentPage;
const firstIndex = lastIndex - recordsPerPage;
const records = course.slice(firstIndex, lastIndex);
const npage = Math.ceil(course.length / recordsPerPage);
const numbers = [...Array(npage).keys()].slice(1);

const changePage = (id) => {
  setCurrentPage(id);
};

  const filter = (id) => {
    console.log(id);
      if(id == 0){
        setCourse(allCourse);
      }else{
        setCourse(allCourse.filter((item)=>item.material_id == id));
      }



    
  };


  return (
    <>
    <select onChange={(e)=>{filter(e.target.value)}} className='selectMaterial' style={{ marginBottom: "1rem", backgroundColor: "#AD8700" , marginTop: "1rem" , marginLeft: "60rem" }}> 
    <option value="0" >تحديد المادة</option>
    {material.map((item, i) => (
      <option value={item.material_id}>{item.material_name}</option>
    ))}
    </select>
      <table>
        <thead>
          <tr>
            <th>اسم الطالب</th>
            <th>الرقم القومي</th>
            <th>اسم الماده</th>
            <th>الفصل الدراسي</th>
            
          </tr>
        </thead>
        <tbody>
        {records.map((item, i) => (
          
  <tr key={i}>
    <td>{item.student_name}</td>
    <td>{item.student_national_id}</td>
    <td>{item.material_name}</td>
    <td>{item.material_sim}</td>
    

  </tr>
))}

        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="" className="page-link" onClick={prePage} style={{
    backgroundColor: "#003c70",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.2rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold"
  }}>
              السابق
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <button className="page-link" onClick={() => changePage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <a href="" className="page-link" onClick={nextPage} style={{
    backgroundColor: "#003c70",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "0.2rem",
    textDecoration: "none",
    display: "inline-block",
    transition: "background-color 0.3s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold"
  }}>
              التالي
            </a>
          </li>
        </ul>
      </nav>
      <div className='con_input' style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" ,flexDirection:"column"}}>
      <CSVLink {...csvReport} className="btn btn-primary" target="_blank"style={{backgroundColor: "#003c70", margin: "2rem auto", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.2rem", border: "none", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }} >
        تحميل
      </CSVLink>
      
      <input 
        type="file"
        name="file"
        onChange={(e) => {setCsvData(e.target.files[0])}}
        style={{backgroundColor: "#003c70", margin: "4rem auto 0 auto", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.2rem", border: "none", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" , display: "table-column" }}
      />
      <input type='submit' value='رفع الملف' onClick={handleUpdate} style={{backgroundColor: "#003c70", margin: "2rem", color: "#fff", padding: "0.5rem 1rem", borderRadius: "0.2rem", border: "none", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" , display: "table-column" }}  />
      
      </div>

      {error && <div className='error'>{error}</div>}
      
    </>
  );

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Stuaddgrade;