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
  const [material,setMaterial] = useState('');
  const [allCourse,setAllCourse] = useState([]);
useEffect(()=>{
  axios.get(`http://localhost:5000/admin/getallgrade`).then((resp)=>{
    console.log(resp);
    setGrade(resp.data);
  })

  axios.get(`http://localhost:5000/admin/allstudentmaterial`).then((resp)=>{
    console.log(resp);
    setAllCourse(resp.data);
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
  material_id: item.material_id,
  student_id: item.student_id,
  student_name: item.student_name,
  material_name: item.material_name,
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
    label: "material_id",
    key: "material_id"
  },
  {
    label: "student_id",
    key: "student_id"
  },
  {
    label: "student_name",
    key: "student_name"
  },
  {
    label: "material_name",
    key: "material_name"
  }
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
        }
        )
      }catch(err){
        console.log(err);
      }
    }
      
    

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = recordsPerPage * currentPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = course.slice(firstIndex, lastIndex);
  const npage = Math.ceil(course.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
    <select onChange={(e)=>{filter(e.target.value)}} >
    <option value="0">Select Material</option>
    {allCourse.map((item, i) => (
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
            <th> درجة العملي</th>
            <th>درجة التحريري</th>
            <th>اعمال السنه</th>
            <th>الدرجه النهائية</th>
          </tr>
        </thead>
        <tbody>
        {course.map((item, i) => (
  <tr key={i}>
    <td>{item.student_name}</td>
    <td>{item.student_national_id}</td>
    <td>{item.material_name}</td>
    <td>{item.material_sim}</td>
    <td>
      <input
        type="text"
        value={item.practical_exams_grade}
        onChange={(e)=>{const updatedCourse = [...course] ;
          updatedCourse[i].practical_exams_grade = e.target.value;
          setCourse(updatedCourse);
        }}
      />
    </td>
    <td>
      <input
        type="text"
        value={item.written_exams_grade}
        onChange={(event) => { const updatedCourse = [...course] ;
          updatedCourse[i].written_exams_grade = event.target.value;
          setCourse(updatedCourse);
        }}

      />
    </td>
    <td>
      <input
        type="text"
        value={item.year_work}
        onChange={(event) => { const updatedCourse = [...course] ;
          updatedCourse[i].year_work = event.target.value;
          setCourse(updatedCourse);
        }}

      />
    </td>
    <td>
      <input
        type="text"
        value={item.full_grade}
        onChange={(event) => { const updatedCourse = [...course] ;
          updatedCourse[i].full_grade = event.target.value;
          setCourse(updatedCourse);
        }}

      />
    </td>

  </tr>
))}

        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href="" className="page-link" onClick={() => changePage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      <input 
        type="file"
        name="file"
        onChange={(e) => {setCsvData(e.target.files[0])}}
      />
      <input type='submit' value='Upload Updated File CSV' onClick={handleUpdate} />
      <CSVLink {...csvReport} className="btn btn-primary" target="_blank">
        Download me
      </CSVLink>
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
