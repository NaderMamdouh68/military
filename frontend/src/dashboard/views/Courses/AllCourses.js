import DataTable from 'react-data-table-component';
import '../../styling/dashboard.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuthUser } from '../../../assets/helper/Storage';
import axios from 'axios';


const AllAppointments = () => {
  const navigate =useNavigate();
  const Auth = getAuthUser();
  const [deleted, setDeleted] = useState({
    reload:0
});
  const [dataState, setDataState] = useState({ // rename state variable to avoid conflict
    loading: false,
    results: [],
    err: [],
    reload: 0
  });

  useEffect(() => {
    
    setDataState({...dataState, loading: true}); // fix typo
    axios.get(`http://localhost:5000/admin/courses`).then((resp) => {

      setDataState({...dataState, results: resp.data, loading: false, err: null});
      console.log(resp);
    }).catch((err) => {
      setDataState({...dataState, loading: false, err: "Data Not Found"});
    })
  }, [deleted]);

  const columns = [
    {
      name: "",
      cell: (param) => updateGrade(param),
      center: true
     
    },
    {
      name: "",
      cell: (param) => deleteAppointment(param),
       
    },
    {
      name: "",
      cell: (param) => AllGrades(param),
    },

  
    {
      name: 'نوع الماده',
      selector: row => row.Course_Type,
      sortable: true,
      center: true
    },
    {
      name: 'الفصل الدراسي  ',
      selector: row => row.Course_Term ,
      sortable: true,
      center: true
    },
    {
      name: 'رقم الماده',
      selector: row => row.Course_ID,
      sortable: true,
      center: true
    },
    {
      name: 'اسم الماده',
      selector: row => row.Course_Name,
      sortable: true,
      center: true
      
    },
    
  ];

  const handleDelete = async (param) => {
    console.log(param);
    await axios.delete(`http://localhost:5000/admin/course/${param
  }`)
    .then((resp) => {
        console.log(resp);
        setDeleted({...deleted,reload:deleted.reload+1});
    })
    .catch((err) => {
        console.log(err);
    });
};

  const updateGrade = (param) => {
    console.log(param.Course_Name);
     
      return (
        <>
          <button className='UpdateBtn' onClick={() =>navigate(`update_appointment/${param}`) }>
          تعديل
          </button>
        </>
        
      );
  };

  const deleteAppointment = (param) => {
    
    return (
      <>
        <button className='deleteBtn' onClick={() => handleDelete(param.Course_Name)}>
        حذف
        </button>
      </>
      
    );
  };
  const AllGrades = (param) => {
    console.log(param);
    return (
   
      <>
      <Link to={`AllGrades/${param.Course_Name}`} className='UpdateBtn'>
        الدرجات
      </Link>
    </>
      
    );
  };

  return (
    <>
      <div className="title-datatable">
       
        <Link to={"add_appointment"} className="addApp">
            اضافة ماده 
          </Link>
      
        <h2>جميع المواد</h2>
        
      </div>
      <DataTable
        columns={columns}
        data={dataState.results} // use state variable to access results
      />
    </>
  );
}

export default AllAppointments;