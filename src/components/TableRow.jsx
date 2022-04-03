import axios from "axios"
const TableRow = ( {user} ) =>{

    const deleteuserHandler =  () =>{
        // alert("The row will be deleted..!" + user._id)

        axios.delete(`http://localhost:5000/users/${user._id}`)
        .then(res => { 
            alert("user deleted successfully..!")
            window.location.reload();
    })
        .catch(err => alert(err))


    }

    return(

        <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.mobNumber}</td>
        <td>
          <button className='btn btn-primary'>Edit</button>
        </td>
        <td>
        <button className='btn btn-danger' onClick={deleteuserHandler}>Delete</button>
        </td>
      </tr>

    )
}

export default TableRow;