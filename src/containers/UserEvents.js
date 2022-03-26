import {useEffect} from "react"
// import {submitLogin, submitSignup, getEvent, addEvent, getUsers, getUser} from '../redux/actionCreators'
import {submitLogin, submitSignup, getEvent, addEvent, getEvents, getUser} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
// import EventCard from "../components/EventCard"
import UserEventCard from "../components/UserEventCard"
import MyProfile from "../components/MyProfile"
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventShow from "../components/EventShow";


function UserEvents(props){

    // useEffect(addEvent, [addEvent])

    const user = props.user
    const event = props.event
    const userID = props.user.id

    useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], addEvent, [addEvent] )



      return <div className="user_events">
    {props.user.userEvents.map(user_event => <UserEventCard {...user_event} key={user_event.id}/>)}
  
  </div>



}

  const mapStateToProps = (state) => {
  return {user: state.user.user_events,
user_event: state.user_event,
user_events: state.user_events  }
  }


  export default connect(mapStateToProps, { getEvent, addEvent })(UserEvents)