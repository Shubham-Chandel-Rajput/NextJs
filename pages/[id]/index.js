import axios from 'axios'
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBBtn} from 'mdb-react-ui-kit';
import Link from 'next/link';
import {useRouter} from 'next/router';
function eachUser({users}) {
    const router = useRouter();
    const userId = router.query.id;
    const deleteUser = async () => {
        try{
            const deleteUser = await axios(`http://localhost:3000/api/user/${userId}`,{
                method:"DELETE"            
            });
            router.push('/');
        }catch(e){
            console.log(e);
        }
    }
  return (
    <div className='container'>
        <h1 className="dispaly-3"> Identity of a user</h1>
        <MDBCard className ="border border-2 my-2" style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
                <MDBCardTitle>{users.name}</MDBCardTitle>
                <MDBCardText>
                {users.email}
                </MDBCardText>
                <MDBBtn 
                onClick={deleteUser}
                className='btn btn-danger'>Delete user</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}
export async function getServerSideProps ({params}){
    const id= params.id;
    const res = await axios(`http://localhost:3000/api/user/${id}`);
    const user = res.data.user;
    return({
            props:{users:user}
        })
}
export default eachUser