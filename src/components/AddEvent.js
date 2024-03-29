
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin, getEvent, getUser, addEvent } from '../redux/actionCreators.ts';
import EventShow from "../components/EventShow";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import MyProfile from "../components/MyProfile";



function AddEvent(props) {

  let navigate = useNavigate();

  const user = props.user;
  const event = props.event;
  const users = props.users;
   
  const userID = props.user.id;
  const username = props.user.username;
    
  // const isEventAlreadyAdded = () => {
  //   return event.users && event.users.some((u) => u.id === user.id);
  // };
  const isEventAlreadyAdded = () => {
    return event.users && event.users.some((u) => u.id === user.id);
  };

  const [isAttending, setIsAttending] = useState(isEventAlreadyAdded());

  useEffect(() => {
    setIsAttending(isEventAlreadyAdded());
  }, [event, user, props.userEvents]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if (!isEventAlreadyAdded()) {
  //     props.addEvent({ user, event });
  //     setIsAttending(true);
  //   } else {
  //     alert("You have already added this event.");
  //   }
  // };
  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   if (!isEventAlreadyAdded()) {
  //     await props.addEvent({ user, event });
  //     setIsAttending(true);
  //   } else {
  //     alert("You have already added this event.");
  //   }
  // };
  const handleClick = async (e) => {
    e.preventDefault();
    if (!isEventAlreadyAdded()) {
      await props.addEvent({ user, event });
      setIsAttending(true);
      props.getEvent(event.id); // Add this line to refresh the event data
    } else {
      alert("You have already added this event.");
    }
  };
  

    // const handleClick = (e) => {
    //    e.preventDefault()
    //     props.addEvent({ user, event } )
    //  }


  return (
    <div className="addEvent">
      <button onClick={handleClick}>{isAttending ? "Attending" : "Add Event"}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user, 
    users: state.users,
    event: state.event,
    events: state.events,
    userEvents: state.user.userEvents
  }
};

export default connect(mapStateToProps, { getEvent, addEvent })(AddEvent);


