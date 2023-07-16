
import { useState } from 'react';
import '../styling/AddForm.css';
import axios from "axios";
import { getAuthUser } from "../../assets/helper/Storage";
import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router-dom';


const UpdateForm = ({ inputs }) => {
  const Auth = getAuthUser();
  const [course, setCourse] = useState(""); 
  const { param } = useParams();
  console.log(param);

  const [currRequests, setRequests] = useState({
    loading: false,
    results: [],
    err: [],
    reload: 0,
  });
  const [requestStatus, setRequestStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedCourse = {
        Course_Name: course["اسم الماده"],
        Course_ID: course["رقم الماده"],
        Course_Type: course["نوع الماده"],
        Course_Term: course["الفصل الدراسي"],
      };

      const resp = await axios.post(
        `http://localhost:5000/admin/course/${param}`,
        updatedCourse,
        {
          headers: {
            token: Auth.token,
          },
        }
      );

      if (resp.status === 200) {
        setRequestStatus("Course updated successfully");
      } else {
        setRequestStatus("Failed to update course");
      }

      console.log(resp);
    } catch (err) {
      console.log(err);
      setRequestStatus("Failed to update course");
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>تعديل ماده</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form action="ProductList" onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "select" ? (
                    <select
                      required
                      value={course[input.label] || ""}
                      onChange={(event) => {
                        setCourse({
                          ...course,
                          [input.label]: event.target.value,
                        });
                      }}
                    >
                      {input.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      required
                      type={input.type}
                      placeholder={input.placeholder}
                      value={course[input.label] || ""}
                      onChange={(event) => {
                        setCourse({
                          ...course,
                          [input.label]: event.target.value,
                        });
                      }}
                    />
                  )}
                </div>
              ))}
              <button>تحديث</button>
              {requestStatus && (
                <Alert variant={requestStatus.includes("successfully") ? "success" : "danger"}>
                  {requestStatus}
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
