

export const data = [
    {
        id: 1,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: '24/5/2020',
        time: '23:20',
        price: '452',
        maxNumberOfTravelers:'50'
    },
    {
        id: 2,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23/5/2020',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 3,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 4,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 5,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 6,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 7,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 8,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 9,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 10,
        photo: 'https://s26162.pcdn.co/wp-content/uploads/2017/05/the-lord-of-the-rings-book-cover.jpg',
        from: 'cairo',
        to: 'abraham lincolin',
        date: 'Drama',
        time: '23',
        price: '452-143-5687',
        maxNumberOfTravelers:'50'
    },
    {
        id: 11,
        photo: '/the-lord-of-the-rings-book-cover.jpg',
        title: 'lordftherings',
        author: 'abraham lincolin',
        category: 'Action',
        rackNumber: '23',
        ISBN: '452-143-5687'
    },
    {
        id: 12,
        photo: '/the-lord-of-the-rings-book-cover.jpg',
        title: 'lordftherings',
        author: 'abraham lincolin',
        category: 'Action',
        rackNumber: '23',
        ISBN: '452-143-5687'
    }, {
        id: 13,
        photo: '/the-lord-of-the-rings-book-cover.jpg',
        title: 'lordftherings',
        author: 'abraham lincolin',
        category: 'Action',
        rackNumber: '23',
        ISBN: '452-143-5687'
    },
    {
        id: 14,
        photo: '/the-lord-of-the-rings-book-cover.jpg',
        title: 'lordftherings',
        author: 'abraham lincolin',
        category: 'Action',
        rackNumber: '23',
        ISBN: '452-143-5687'
    },
];

export const users = [
    {
    
        email:'ahmed@gmail.com',
        phone:'01153304771'
    },
    {
    
        email:'ahmed@gmail.com',
        phone:'01153304771'
    },
    {
    
        email:'ahmed@gmail.com',
        phone:'01153304771'
    },
    {
    
        email:'ahmed@gmail.com',
        phone:'01153304771'
    },
    {
        
        email:'ahmesdasdd@gmail.com',
        phone:'01153304771'
    },
    {
    
        email:'ahmed@gmail.com',
        phone:'01153304771'
    },

]
export const requests =[
    {
        email:"ahmednaeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
    {
        email:"ahmednaeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
    {
        email:"ahmednaeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
    {
        email:"ahmednaeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
    {
        email:"ahmednaeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
    {
        email:"ahmed5454naeem200393@gmail.com",
        appointmentID:"20",
        status:"pending"
    },
]
export const findById = ({ params }) => {
    const key = JSON.parse(params.id);
    const oldData = data.find((item) => item.id === key)
    if (oldData) {
        return oldData;
    }
    return null
};
export const findByEmail = ({ RequestInputs }) => {
    const key = RequestInputs.email;
     const oldData = data.find((item) => item.RequestInputs === key)
    if (oldData) {
        return oldData;
    }
    return null
};