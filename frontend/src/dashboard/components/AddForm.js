import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import '../styling/AddForm.css'
import moment from "moment";
import axios from "axios";
import { getAuthUser } from "../../assets/helper/Storage";
import Alert from 'react-bootstrap/Alert';

const AddForm = ({ inputs, title }) => {
    const Auth = getAuthUser();
    const [file, setFile] = useState("");
    const [appointment, setAppointment] = useState({
      Course_ID:"",
      Course_Name:"",
      Course_Term:"",
      Course_Type:"",

    });
    const [currRequests,setRequests]=useState({ 
        loading: false,
        results: [],
        err: [],
        reload: 0
      });
      const [requestStatus, setRequestStatus] = useState(null);
      const handleSubmit = async (event) => {
console.log(appointment);
        event.preventDefault();
        try {
                    setRequests({ ...currRequests, loading: true });
          const resp = await axios.post("http://localhost:5000/admin/course", {
            Course_Name: appointment.Course_Name,
            Course_ID: appointment.Course_ID,
            Course_Type: appointment.Course_Type,
            Course_Term: appointment.Course_Term,
          });
      
          setRequests({
            ...currRequests,
            results: resp,
            loading: false,
            err: null,
          });
          
          console.log(resp);
          setRequestStatus(resp.data.message);
          console.log(resp);
        } catch (err) { 
          console.log(err);
          setRequestStatus(err.response.data);
        
          setRequests({
            ...currRequests,
            loading: false,
            err: "User not added",
          });
        }
        console.log(appointment);
      };
    return (
        <div className="new">
            <div className="newContainer">
                <div className="top">
                    <h1>اضافة ماده</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                  
                    </div>
                    <div className="right">
                        <form  action="ProductList" onSubmit={handleSubmit}>
                        {inputs.map((input) => (
  <div className="formInput" key={input.id}>
    <label>{input.label}</label>
    {input.type === "select" ? (
      <select
        required
        value={appointment[input.label]}
        onChange={(event) => {
          setAppointment({
            ...appointment,
            [input.name]: event.target.value,
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
        value={appointment[input.label]}
        onChange={(event) => {
        
            setAppointment({
              ...appointment,
              [input.name]: event.target.value,
            });
          
        }}
      />
    )}
  </div>
))}

                            <button>اضافة</button>
                            {requestStatus && typeof requestStatus === "string" && (
  <Alert variant={requestStatus.includes("added") ? "success" : "danger"}>
    {requestStatus}
  </Alert>
)}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddForm