import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styling/UpdateForm.css"; // import CSS file
import { getAuthUser } from "../../../assets/helper/Storage";
import axios from "axios";
import { Alert } from "react-bootstrap";

const UpdateTraveler = () => {
  const { email } = useParams();
  const Auth = getAuthUser();
  const [status, setStatus] = useState({
    loading: false,
    results: [],
    err: [],
    reload: 0,
  }); 
  const [userInfo, setUserInfo] = useState({
    phone: "",
    password: ""
  });
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
      .get(`http://localhost:4000/adminPage/${email}`, {
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currRequests.results.email);
    console.log(userInfo);
    setStatus(prevState => ({ ...prevState, loading: true })); // use functional form of setState
    axios
      .put(`http://localhost:4000/adminPage/${email}`, { phone: userInfo.phone,
    password:userInfo.password }, {
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
        setUserInfo({
          phone: "",
          password: ""
        });
        setShowForm(false);
        setAlertMsg(resp.data.msg); 
        setShowAlert(true);
      })
      .catch((err) => {
        console.log(err);
        setStatus({ ...status, loading: false, err: err });
      });
  };

  return (
    <>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          {currRequests.results? (
            <>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={currRequests.results.email}
                  readOnly
                />
              </div>
             
            </>
          ) : (
            <div>Loading...</div>
          )}
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            
              <input type="text" required autocomplete="current-password"  id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            
              <input type="password" required id="password"   
              name="password"
              value={userInfo.password}
              onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}/>
            
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Update
            </button>
          </div>
        </form>
      )}
      {showAlert && (
        <div className="alert-container">
          <Alert variant="success" className="alert">
            {alertMsg}
          </Alert>
        </div>
      )}
    </>
  );
};

export default UpdateTraveler;