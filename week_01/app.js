import axios from "axios";
// Adding axios library for making requests

async function getData(id){
    try{
      // Using try-catch block to catch errors
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

    const {data:posts} =await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);

    const mergeObj = {
        "Users:": { ...user },
        "Posts:": { ...posts }
    }; 
    // Using spread operator to merge objects
    console.log(mergeObj);

    }catch(error){
    
        console.log(error);
    }
}

export default getData;
// Exporting the function to make it available outside of the file