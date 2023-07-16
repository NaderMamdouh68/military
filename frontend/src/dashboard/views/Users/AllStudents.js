import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../styling/ALLStud.css'
import { getAuthUser } from '../../../assets/helper/Storage';
import axios from 'axios';
import UpdateAppointment from '../Courses/UpdateCourses';

const AllTravelers =()=>{
    const [deleted, setDeleted] = useState({
        reload:0
    });
    const [currUsers,setUsers]=useState({
        loading: false,
        results: [],
        err: [],
        reload: 0
    });

    useEffect(() => {
        setUsers({ ...currUsers, loading: true });
        axios.get("http://localhost:5000/admin/students")
        .then((resp) => {
            setUsers({ ...currUsers, results: resp.data.students, loading: false, err: null });
            console.log(resp);
        })
        .catch((err) => {
            setUsers({ ...currUsers, loading: false, err: "Students Not Found" });
        });
    }, [deleted]); 
    const columns = [
        {
            name: "",
            cell: (param) => deleteStudent(param),
        },
        {
            name: "",
            cell: (param) => showRequest(param),
        },
         {
            name: "",
            cell: (param) => AddStudent(param),
        },
        {
            name: 'الرقم القومي',
            selector: row => row.National_ID,
            sortable: true,
            center: true
        },
        {
            name: ' اسم الطالب',
            selector: row => row.Student_Name,
            sortable: true,
            center: true
        }, 
       
    ];

    const handleDelete = async (param) => {
        console.log(param);
        await axios.delete(`http://localhost:5000/admin/student/${param.National_ID}`)
        .then((resp) => {
            console.log(resp);
            setDeleted({...deleted,reload:deleted.reload+1});
        })
        .catch((err) => {
            console.log(err);
        });
    };


    const showRequest =(param)=>{
        return (
            <>
                <Link to={`traveler_request/${param}`} className='UpdateBtn' >
                    الدرجات
                </Link>
            </>
        );
    }
    const AddStudent =(param)=>{
        return (
            <>
                <Link to={`AddTraveler/${param}`} className='UpdateBtn' >
                    اضافة
                </Link>
            </>
        );
    }
    const deleteStudent = (param) => {
        return (
            <>
                <button className='deleteBtn' onClick={() => handleDelete(param)}>
                    حذف
                </button>
            </>
        );
    };

    return(
        <>
            <div className="title-datatable">
            <Link to={"add_traveler"} className="addApp">
            اضافة مسؤول 
          </Link>
         
                    <h2>جميع الطلاب</h2>    
            </div>
            <DataTable
                columns={columns}
                data={currUsers.results}
            />
        </>
    );
};

export default AllTravelers;