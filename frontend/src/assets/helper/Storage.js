//Local Storage 

export const setAuthUser=(data)=>{
    //save object to the local storage
    //strigfy objecr to text 
    localStorage.setItem("user",JSON.stringify(data));
};

export const getAuthUser=(data)=>{
    //get to the object from local storage
    //parse objecr to text 
    if (localStorage.getItem("user")) {
         return JSON.parse(localStorage.getItem("user"));   
    }
};

export const removeAuthUser = ()=>{
    if (localStorage.getItem("user")) {
          localStorage.removeItem("user");
    }
  
}