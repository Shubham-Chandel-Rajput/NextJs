import Link from 'next/link';
import {MDBBtn} from 'mdb-react-ui-kit';
function Navbar() {
  return (
    <>
        <nav className='navbar container'>
            <Link href="/">
            <a className='navbar-brand'>Users</a>
            </Link>
            <Link href="/add">
                <MDBBtn>Add user</MDBBtn>
            </Link>
        </nav>
    </>
  )
}
export default Navbar