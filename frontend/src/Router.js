  import { createBrowserRouter, useNavigate } from "react-router-dom";
  import App from "./App";
  import NotFound from "./assets/Shared/NotFound";
  import LoginPage from "./assets/Pages/Auth/Login ";
  import AllAppointments from "./dashboard/views/Courses/AllCourses";
  import AddAppointment from "./dashboard/views/Courses/AddCourses";
  import UpdateAppointment, { UpdateAppointmenyLoader } from "./dashboard/views/Courses/UpdateCourses";
  import Dashboard from "./dashboard/Dashboard";
  import Appointments from "./dashboard/views/Courses/Courses";
  import AllTravelers from "./dashboard/views/Users/AllStudents";
  import Traveler from "./dashboard/views/Users/Students";
  import AddTraveler from "./dashboard/views/Users/AddAdmin";
  import AppointmentRequests from "./dashboard/views/AllGrades/AllGrades";
  import Requests from "./dashboard/views/AllGrades/Grades";
  import UpdateRequests from "./dashboard/views/AllGrades/UpdateGrades";
import TravelerRequest from "./dashboard/views/Users/TravelerRequest";
import UpdateTraveler from "./dashboard/views/Users/UpdateTraveler";
import AllGrades from "./dashboard/views/Courses/AllGrades";

  export const router = createBrowserRouter([
    {
      path: "",
      element: <App />,
      children: [
            {
              path: "/",
              element: <LoginPage />,
            },
  
        {
          path: "*",
          element: <NotFound />,
        },
         {
        path: "/dashboard",
        element:  <Dashboard />,
        children: [

          {
            path: "appointments",
            element: <Appointments />,
            children: [
              {
                index: true,
                element: <AllAppointments />,
              },
              {
                path: "add_appointment",
                element: <AddAppointment />,
              },
              {
                path: "update_appointment/:id",
              
                element: <UpdateAppointment />,
              },
              {
                path:"AllGrades/:CourseName",
                element: <AllGrades />
              }
            ],
          },
          {
            path: "traveler",
            element: <Traveler />,
            children: [
              {
                index: true,
                element: <AllTravelers />,
              },
              {
                path: "add_traveler",
                element: <AddTraveler />,
              },
              {
                path: "update_traveler/:email",
                element: <UpdateTraveler />,
              },
              {
                path:"traveler_request/:email",
                element:<TravelerRequest />
              }
            ],
          },
          {
            path: "requests",
            element: <Requests />,
            children: [
              {
                index: true,
                element: <AppointmentRequests />,
              },
              {
                path: "update_request/:id",
             
                element: <UpdateRequests />,
              },
            ],
          },
        ],
        },
      ],
    },
   
       
     
    
  ]);