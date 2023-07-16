export const appointmentInputs = [
    {
        id: 1,
        label: "رقم الماده",
        type: "text",
        placeholder: "",
        name:"Course_ID"
    },
    {
        id: 2,
        label: "اسم الماده",
        type: "text",
        placeholder: "",
        name:"Course_Name"
    },
    {
        id: 3,
        label: "الفصل الدراسي",
        type: "select",
        placeholder: "",
        name:"Course_Term",
        options: [
            { value: "1", label: "الاول" },
            { value: "2", label: "الثاني" },  
              ]

    },
    {
        id: 4,
        label: "نوع الماده",
        type: "select",
        placeholder: "",
        name:"Course_Type"
        ,
        options: [
            { value: "اجباري", label: "اجباري" },
            { value: "اختياري", label: "اختياري" },  
              ]
    },
];
export const travelerInputs = [
    {
        id:1,
        label: "كلمة المرور",
        type: "password",
        placeholder: "",
    },

    {id:2,
        label: "البريد الالكتروني",
        type: "email",
        placeholder: "",
    },
];
export const requestInputs = [
    {
        id:1,
        label: "request",
        type: "text",
        placeholder: "pending",
    },
    
];
export const InputsUpdateUser = [
    {
        id:1,
        label: "phone",
        type: "text",
        placeholder: "",
    },
    {
        id:1,
        label: "password",
        type: "password",
        placeholder: "",
    },
   
]