import DataTable from 'react-data-table-component';
import '../../styling/dashboard.css';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthUser } from '../../../assets/helper/Storage';
import axios from 'axios';
import { CSVLink } from 'react-csv';

const AddCoursesGrades = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [grade, setGrade] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/admin/getallgrade`)
      .then((resp) => {
        console.log(resp);
        setGrade(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`http://localhost:5000/admin/getmaterial/${id}`)
      .then((resp) => {
        console.log(resp);
        setCourse(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (i) => {
    console.log(course[i]);
    axios.put("http://localhost:5000/admin/updategrade", course[i])
      .then((resp) => {
        console.log(resp);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  return (
    <>
      <table>
        <thead>
          <tr>
            <th dir="rtl">اسم الطالب</th>
            <th dir="rtl">الرقم الوطني للطالب</th>
            <th dir="rtl">اسم المادة</th>
            <th dir="rtl">رمز المادة</th>
            <th dir="rtl">درجة الاختبار الكتابي</th>
            <th dir="rtl">عمل العام</th>
            <th dir="rtl">الدرجة الكاملة</th>
            <th dir="rtl">درجة الاختبار العملي</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {course.map((item, i) => (
            <tr key={i}>
              <td>{item.student_name}</td>
              <td>{item.student_national_id}</td>
              <td>{item.material_name}</td>
              <td>{item.material_sim}</td>
              {grade.map((item2, j) => {
                if (item2.student_id === item.student_id && item2.material_id === item.material_id) {
                  return (
                    <>
                      <td>{item2.written_exams_grade}</td>
                      <td>{item2.year_work}</td>
                      <td>{item2.full_grade}</td>
                      <td>{item2.practical_exams_grade}</td>
                    </>
                  );
                } else {
                  return null;
                }
              })}
              <td>
                <input
                  type="text"
                  value={item.written_exams_grade}
                  onChange={(event) => {
                    const updatedCourse = [...course];
                    updatedCourse[i].written_exams_grade = event.target.value;
                    setCourse(updatedCourse);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.year_work}
                  onChange={(event) => {
                    const updatedCourse = [...course];
                    updatedCourse[i].year_work = event.target.value;
                    setCourse(updatedCourse);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.full_grade}
                  onChange={(event) => {
                    const updatedCourse = [...course];
                    updatedCourse[i].full_grade = event.target.value;
                    setCourse(updatedCourse);
                  }}
                />
              </td>
              <td>
                <button onClick={() => { handleUpdate(i) }}>تعديل</button>
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
      <button type="submit" onClick={handleUpdate}>تأكيد</button>
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
};

export default AddCoursesGrades;
