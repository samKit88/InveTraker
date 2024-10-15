import { Link, Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>Welcom</p>
      <br />
      <br />
      <Link to={'/signin'}> Signin </Link>
      <br />
      <Link to={'/signup'}>Signup</Link>
      <Outlet />
    </div>
  )
}

export default Home
