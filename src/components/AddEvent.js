// import {connect} from 'react-redux'
// import { useParams } from 'react-router-dom';
// import { getEvent } from '../redux/actionCreators';
// import { Link, Outlet} from 'react-router';
// import { useEffect } from 'react';
// import Login from "../components/Login";
// import Signup from "../components/Signup";
// import EventCard from "../components/EventCard";
// import { submitSignup, submitLogin } from '../redux/actionCreators';
// import MyProfile from "../components/MyProfile";

// function AddEvent(props){


// // const [attending, setAttending] = useState("")
// // const [maybe_attending, setMaybeAttending] = useState("")

// // const handleClick = {
// //     props.AddEvent(attending)
// // }

// useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup] )
    


//     return (
//         <div className="Atttendance Button">

//         {/* <button  onClick={props.first_name}>   </button> */}
//         <h1> Hi {props.first_name} </h1>
  
//         </div>
    
//     )


// }

// const mapStateToProps = (state) => {
//     return {...state.user}
// }


// export default connect(mapStateToProps, { submitSignup, submitLogin })(AddEvent)

// const mapStateToProps = (state) => ({})
// function connect
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Login from "../components/Login";
import Signup from "../components/Signup";
import EventCard from "../components/EventCard";
import { submitSignup, submitLogin, addEvent, getEvent } from '../redux/actionCreators';
import EventShow from "../components/EventShow";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import MyProfile from "../components/MyProfile";




// import { getState } from 'react';



function AddEvent(props){


  let navigate = useNavigate();

    // useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )
    // useEffect(getEvent, [getEvent], submitSignup, [submitSignup

    const user = props.user
    const event = props.event
    
    // const eventId = useParams().eventId;
    // const userId = props.userId;
    // const userId = props.id;
    // const userId = props.id;
    // const selectUserId = state => state.user.id


    // const [userID, setuserID] = useState(state.user.id);
    // const [eventID, seteventID] = useState(state.selectedEvent.id);

    const handleClick = (e) => {
        e.preventDefault()
        addEvent({ user, event } )
        
    // addEvent(userId, eventId)
    // props.addEvent(currentUserId)
    //    navigate("/myprofile", { replace: true });
    // props.addEvent(userId)
      }


    
    

  
    return (<div className="addEvent">


            <button onClick={handleClick}>
            Attending
            </button>

         
            {/* {/* <h1> {selectUserId}</h1> */}
            <h1> {  MyProfile.UserID}</h1>
            <h1> {  props.user.id}</h1>
            <h1> {  props.event.id}</h1>

            {/* <h1> {  MyProfile.props.username}</h1>
            */}


{/*             
            <h1> {parseInt(localStorage.currentUser, 2)} </h1> */}
            {/* <h1> {state.username} </h1>
            */}

            {/* <h1> {this.props.event_id} </h1>
             */}
            
            
    
   </div>
    )
};

const getUserID = state => state.user.id;

const mapStateToProps = (state) => {
    return {
       user: state.user, 
       event: state.event
    }
        
}


// export default connect(null, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)
export default connect(mapStateToProps, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)


// const AddEvent = ({ history, addEvent }) =>

//     useEffect(submitLogin, [submitLogin], submitSignup, [submitSignup], getEvent, [getEvent] )

//     const handleSubmit = (formData, userId) => {
//         addEvent({
//           ...formData,
//           userId
//         }, history)
//       }

  
//     return (<div className="addEvent">


//             <button onClick={addEvent}>
//             Attending
//             </button>
    
//    </div>
//     )
// };

// const mapDispatchToProps = { addEvent }

// const mapStateToProps = (state) => {
//     return {
//        ...state.user,
//     }
        
// }


// export default connect(mapStateToProps, { submitSignup, submitLogin, getEvent, addEvent })(AddEvent)