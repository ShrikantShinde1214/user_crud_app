import React,{useState,useEffect}from "react"
import axios from "axios"
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";
const Home = () => {
   
    // // to store the user data from the api:----
    const [userData,setuserData] = useState([]);
    console.log(userData);

     useEffect(() => {
    //    fetch("http://localhost:5000/users")
    //    .then(res => res.json())
    //    .then(data =>{
    //      console.log(data);
    //    }).catch(err => alert(err));
       
    //  }, [setfirstName])

    axios.get("http://localhost:5000/users")
    .then(res =>{
      console.log(res.data)
      setuserData(res.data);
    }).catch(err => alert(err));
  }, []);
     


    
    return(
        <>
      <h1 className='text-center bg-dark text-white'>React,Node,Express,JS & Mongo DB CRUD APP</h1>
      <Link to="/Add-user" className='btn btn-success float-right mb-3'>Add User</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mob.No</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tr>
        <td>Shrikant</td>
        <td>Shinde</td>
        <td>shri1214@gmail.com </td>
        <td>9370383946</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Rushikesh</td>
        <td>Shinde</td>
        <td>rushu44@gmail.com </td>
        <td>7875969298</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Ajay</td>
        <td>Alure</td>
        <td>ajay0990@gmail.com </td>
        <td>9370666646</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Pradip</td>
        <td>More</td>
        <td>pradip3434@gmail.com </td>
        <td>9370777777</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Vinod</td>
        <td>Mokashi</td>
        <td>vinod@gmail.com </td>
        <td>9890722239</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Suraj</td>
        <td>Jhungare</td>
        <td>suraj1214@gmail.com </td>
        <td>9366774946</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Aniket</td>
        <td>Shinde</td>
        <td>aniket@gmail.com </td>
        <td>8999453678</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        <tr>
        <td>Vaibhav</td>
        <td>Shinde</td>
        <td>vaibhav5656@gmail.com </td>
        <td>9766293698</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger'>Delete</button>
        </td>
        </tr>
        
        <tbody>
          {
            userData.map((user) =>{
              return(
               <TableRow key={user._id} user={user}/>
              )
            })
          }
        </tbody>
      </table>
    </>
    )
}
export default Home;
