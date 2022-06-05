import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn} from 'mdb-react-ui-kit';
import Link from 'next/link';
import axios from 'axios';
export default function Home({users}) {
  return (
    <>
        <div className='container'>
          <h1 className="display-2">User Identity</h1>
          <div>
          {users.map((currUser)=>{
            return(
              <>
                <MDBCard className ="border border-2 my-2" style={{ maxWidth: '22rem' }}>
                <MDBCardBody>
                  <MDBCardTitle>{currUser.name}</MDBCardTitle>
                  <MDBCardText>
                    {currUser.email}
                  </MDBCardText>
                  <Link href={`/${currUser._id}`}><MDBBtn className='mx-2'>View user</MDBBtn></Link>
                  <Link href={`/${currUser._id}/edit`}><MDBBtn>Edit user</MDBBtn></Link>
                </MDBCardBody>
                </MDBCard>
              </>
          )
          })}
          </div>
        </div>
    </>
  )
}
export async function getServerSideProps (context) {
  const res = await axios('http://localhost:3000/api/user');
  const {users} = res.data;
  return({
    props:{users:users}
  })
}
