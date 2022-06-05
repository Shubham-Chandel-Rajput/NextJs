import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
function addNewUser() {
    const Router = useRouter();
    const [form,setForm] = useState({
        name:"",
        email:""
    });
    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setForm({...form,[name]:value});
    }
    const handleForm = async (e) =>{
        e.preventDefault();
        const {name,email} = form;
        if(!name || !email){
            alert("Fill all the details");
        }else{
            try{
                const res = await axios("http://localhost:3000/api/user",{
                    method:"POST",
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
    }
  return (
      <>
        <div className="container">
            <h1>Add new user</h1>
            <form onSubmit={handleForm}>
                <MDBInput 
                onChange={handleChange}
                label='Name'
                type="text"
                name='name'
                />
                <MDBInput 
                className='my-2'
                onChange={handleChange}
                label='Email'
                type="text"
                name='email'
                />
                <MDBBtn type="submit">Add new user</MDBBtn>
            </form>
        </div>
      </>
  )
}

export default addNewUser