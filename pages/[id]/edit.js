import axios from 'axios';
import React, { useState } from 'react'
import {useRouter} from 'next/router'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
function User({user}) {
  const Router = useRouter();
  const [form,setForm]  = useState({
    name:user.name,
    email:user.email
  })
  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setForm({...form,[name]:value});
  }

  const handleForm = async (e) =>{
    e.preventDefault();
    try{
      const res = await axios(`http://localhost:3000/api/user/${user._id}/`,{
        method:"PUT",
        headers:{
          "content-type":"application/json"
        },
        data:JSON.stringify(form)
      });
        Router.push('/');
    }catch(e){
      console.log(e);
    }
  }   
  return (
    <>
      <div className="container">
            <h1>Edit user</h1>
            <form onSubmit={handleForm}>
                <MDBInput 
                onChange={handleChange}
                label='Name'
                type="text"
                name='name'
                value={form.name}
                />
                <MDBInput 
                className='my-2'
                onChange={handleChange}
                label='Email'
                type="text"
                name='email'
                value={form.email}
                />
                <MDBBtn type="submit">Update user</MDBBtn>
            </form>
        </div>
    </>
  )
}

export async function getServerSideProps({params}){
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/user/${id}/`,{
    header:"PUT"
  });
  const user = res.data.user;
  return({
    props:{user:user}
  })
}
export default User