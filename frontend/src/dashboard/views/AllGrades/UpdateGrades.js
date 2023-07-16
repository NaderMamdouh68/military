import { useLoaderData } from "react-router-dom";
import { RequestInputs } from "../../FormSource";
import { findByEmail, findById } from "../../helper/helper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styling/UpdateForm.css"; // import CSS file
import { getAuthUser } from "../../../assets/helper/Storage";
import axios from "axios";
import { Alert } from "react-bootstrap";


const UpdateRequests = () => {
  const { id } = useParams();
  const Auth = getAuthUser();
  const [status, setStatus] = useState({
    loading: false,
    results: [],
    err: [],
    reload: 0,
  }); 
  const [approve, setApprove] = useState("");
  const [currRequests, setRequests] = useState({
    loading: false,
    results: [],
    err: [],
    reload: 0,
  });
  const [showForm, setShowForm] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    setRequests({ ...currRequests, loading: true });
    axios
      .get(`http://localhost:4000/requestAdmin/spasific/${id}`, {
        headers: {
          token: Auth.token,
        },
      })
      .then((resp) => {
        setRequests({
          ...currRequests,
          results: resp.data,
          loading: false,
          err: null,
        });
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        setRequests({ ...currRequests, loading: false, err: err });
      });
  }, [approve]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(approve);
    setRequests({ ...status, loading: true });
    axios
      .put(`http://localhost:4000/requestAdmin/${id}`,{status:approve}, {
        headers: {
          token: Auth.token,
        },
      })
      .then((resp) => {
        setStatus({
          ...status,
          results: resp.data,
          loading: false,
          err: null,
        });
        console.log(resp);
        setApprove("");
        setShowForm(false);
        setAlertMsg(resp.data.msg); 
        setShowAlert(true);
      })
      .catch((err) => {
        console.log(err);
        setStatus({ ...status, loading: false, err: err });
      
      });
  
    // code to submit updated request
  };

  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          {currRequests.results?.length > 0 ? (
            <>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={currRequests.results[0].traveler_id}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="appointment">Appointment:</label>
                <input
                  type="text"
                  id="appointment"
                  name="appointment"
                  value={currRequests.results[0].appointment_id}
                  readOnly
                />
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={approve}
              onChange={(e) => setApprove(e.target.value)}
            >
              <option value="">--Select status--</option>
              <option value="accepted">Accepted</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn" >
              Update
            </button>
          </div>
        </form>
      )}
      {showAlert && (
        <div className="alert-container">
        <Alert variant="success" className="alert" >
          {alertMsg} 
        </Alert>
      </div>
      )}
    </>
  );
};

export default UpdateRequests;