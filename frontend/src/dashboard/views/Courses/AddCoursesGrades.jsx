import DataTable from 'react-data-table-component';
import '../../styling/dashboard.css'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthUser } from '../../../assets/helper/Storage';
import axios from 'axios';
import math from 'math.js';

const AddCoursesGrades = () => {
 const {id}= useParams();
 const [course,setCourse] = useState([]);
useEffect(()=>{
  axios.get(`http://localhost:5000/admin/getmaterial/${id}`).then((resp)=>{
    console.log(resp);
    setCourse(resp.data);
  })
},[])
  const data = [
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"ahmed",
        grade:"123",
        national_id:"35168498646"
      },
      {
        name:"mohamed",
        grade:"123",
        national_id:"35168498646"
      },
    ];
    const handleUpdate = ()=>{
      axios.put("http://localhost:5000/admin/updategrades",course).then((resp)=>{
        console.log(resp.data);
      }).catch((err)=>{
        console.log(err);
      })
    }

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = recordsPerPage * currentPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const changePage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
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
        onChange={(event) => {
          const updatedCourse = course.map((c, index) => {
            if (index === i) {
              return {
                ...c,
                practical_exams_grade: event.target.value
              };
            }
            return c;
          });
          setCourse(updatedCourse);
        }}
      />
    </td>
    <td>
      <input
        type="text"
        value={item.written_exams_grade}
        onChange={(event) => {
          const updatedCourse = course.map((c, index) => {
            if (index === i) {
              return {
                ...c,
                written_exams_grade: event.target.value
              };
            }
            return c;
          });
          setCourse(updatedCourse);
        }}
      />
    </td>
    <td>
      <input
        type="text"
        value={item.year_work}
        onChange={(event) => {
          const updatedCourse = course.map((c, index) => {
            if (index === i) {
              return {
                ...c,
                year_work: event.target.value
              };
            }
            return c;
          });
          setCourse(updatedCourse);
        }}
      />
    </td>
    <td>
      <input
        type="text"
        value={item.full_grade}
        onChange={(event) => {
          const updatedCourse = course.map((c, index) => {
            if (index === i) {
              return {
                ...c,
                full_grade: event.target.value
              };
            }
            return c;
          });
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
      <button type='submit' onClick={handleUpdate}> تأكيد</button>
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

export default AddCoursesGrades;
