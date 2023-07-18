  import { createBrowserRouter, useNavigate } from "react-router-dom";
  import App from "./App";
  import NotFound from "./assets/Shared/NotFound";
  import LoginPage from "./assets/Pages/Auth/Login ";
  import AllAppointments from "./dashboard/views/Courses/AllCourses";
  import AddAppointment from "./dashboard/views/Courses/AddCourses";
  import Dashboard from "./dashboard/Dashboard";
  import Appointments from "./dashboard/views/Courses/Courses";
  import AllTravelers from "./dashboard/views/Users/AllStudents";
  import Traveler from "./dashboard/views/Users/Students";
  import AddTraveler from "./dashboard/views/Users/AddAdmin";
import TravelerRequest from "./dashboard/views/Users/TravelerRequest";
import UpdateTraveler from "./dashboard/views/Users/UpdateTraveler";
import AllGrades from "./dashboard/views/Courses/AllGrades";
import AddCoursesGrades from "./dashboard/views/Courses/AddCoursesGrades";
import A3Table from "./dashboard/views/Courses/A3Table";
import Stuaddgrade from "./dashboard/views/Courses/Stuaddgrade";

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
                path:"AllGrades/:CourseName",
                element: <AllGrades />
              },
              {
                path:"allGrade/:id",
                element:<AddCoursesGrades />
              }
              ,{
                path:"table",
                element:<A3Table />
              }
              ,{
                path:"addallgrades",
                element:<Stuaddgrade />
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
        
        ],
        },
      ],
    },
   
       
     
    
  ]);