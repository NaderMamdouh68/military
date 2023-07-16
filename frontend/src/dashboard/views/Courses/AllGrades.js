import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getAuthUser } from "../../../assets/helper/Storage";
import '../../styling/Grades.css'

    const AllGrades = () => {
    
        const { CourseName } = useParams();
        const [currRequests, setRequests] = useState({
          loading: false,
          results: [],
          err: [],
          reload: 0,
        });
        useEffect(() => {
          console.log(CourseName);
          console.log("22");
          setRequests({ ...currRequests, loading: true });
          axios
          .get(`http://localhost:5000/admin/course/${CourseName}`)
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

     
        const columns = [
        {
            name: "",
            cell: (param) => UpdateGrade(param),
        },
           
            {
                name: 'التقدير',
                selector: row => row.Grade,
                sortable: true,
                center: true
            },
            {
                name: 'اعمال السنه',
                selector: row => row.Year_Work,
                sortable: true,
                center: true
            },  
            {
              name: ' الدرجة النهائيه',
              selector: row => row.Full_Grade,
              sortable: true,
              center: true
          },  
          {
            name: ' العملي',
            selector: row => row.Practical_Exams_Grade,
            sortable: true,
            center: true
        },  
        {
          name: ' النظري',
          selector: row => row.Written_Exams_Grade,
          sortable: true,
          center: true
        },  
        {
          name: ' الشفوي' ,
          selector: row => row.Oral_degree,
          sortable: true,
          center: true
      },  
      {
        name: 'اسم الماده',
        selector: row => row.Course_Name
        ,
        sortable: true,
        center: true
    },
        ];
        const UpdateGrade = (param) => {
          return (
            <>
              <Link to={`update_traveler/${param.id}`} className='UpdateBtn'>
                تعديل الدرجة
              </Link>
            </>
          );
        };
      

            return(<>

            <div className="title-datatable">
            <Link to={"add_appointment"} className="addApp">
          اضافة درجة 
          </Link>
                        <h2>الدرجات</h2>
                    
                    </div>  
                    <DataTable
                        columns={columns}
                        data={currRequests.results}/>
            </>);
    }

    export default AllGrades