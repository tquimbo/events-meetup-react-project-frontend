import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvent } from '../redux/actionCreators';
import { Link, Outlet} from 'react-router';
import { useEffect } from 'react';
import EventCard from "../components/EventCard";
import AddEvent from "../components/AddEvent";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { submitSignup, submitLogin } from '../redux/actionCreators';
import MyProfile from "../components/MyProfile";

function UserProfile({getEvent, performer_name, performer_image, venue_name, venue_address, datetime, attendance_status, username, id, addEvent, username, first_name, last_name, submitLogin, submitSignup}){

    // let params = useParams().id;
    // let params = useParams();
    //let { eventId } = useParams();

  
    const userId = useParams().userId;


  
    //  const handleClick = (e) => {
    //       e.preventDefault()
    //     addEvent({id, eventId})
    //     }



    useEffect(() => {
        getEvent(getUser)
      }, [getUser, eventId])

    //    useEffect(getEvent, [getEvent])
    // {eventId}
   
return (<div className="show">

    
   <h3>{performer_name}</h3>
   {/* <p> {params.eventId} </p> */}
    <img src={performer_image} alt={venue_name}/>
    <p>{venue_name}</p>
    <p>{venue_address}</p>
    <p>{attendance_status}</p>
    <p>{id}</p>
   
   
    


   <AddEvent/>

  </div>

 
)};


// const mapStateToProps = state => {
//   return {
//       user: state.user,
//       event: state.selectedEvent,
//   }
// }




const mapStateToProps = (state) => {
        return {...state.selectedEvent}
    }
    
// export default EventShow

export default connect(mapStateToProps, {getEvent })(EventShow);