// import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { logout } from '../redux/actionCreators'


// function Nav(props){

//   return <nav>
//    <NavLink to="/index"> See all events </NavLink> |
//    <NavLink to="/login"> Login </NavLink> |
//    <NavLink to="/signup"> Signup </NavLink> |
//    <NavLink to="/myprofile"> My Profile </NavLink> |
//    <button onClick={logout}>Logout!</button>
//   </nav>

// }

// export default Nav

   
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'

function Nav({logout, username}){
  // if we're logged in, show the traditional nav
  // if we're not logged in, show something else
  // to do that, see if we have a user

  const loggedInRender = () => <nav>
      <NavLink to="/index"> See all events </NavLink> |
      <NavLink to="/login"> Login </NavLink> |
      <NavLink to="/signup"> Signup </NavLink> |
      <NavLink to="/myprofile"> My Profile </NavLink> |
      <button onClick={logout}>Logout!</button>
  </nav>

  const loggedOutRender = () => <nav> <NavLink to="/index"> See all events </NavLink> |
  <NavLink to="/login"> Login </NavLink> |
  <NavLink to="/signup"> Signup </NavLink> |</nav>

  return username ? loggedInRender() : loggedOutRender()
}

const mapStateToProps = (state) => ({username: state.user.username})

export default connect(mapStateToProps, {logout})(Nav);