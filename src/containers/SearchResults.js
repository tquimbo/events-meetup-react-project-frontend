// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import EventCard from "../components/EventCard"
// import SearchBar from './components/SearchBar';


// function SearchResults({getEvents, events}){

//     const { search } = window.location;
// const query = new URLSearchParams(search).get('input');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = FilterEvents(events, searchQuery);

// const FilterEvents = (events, query) => {
//     if (!query) {
//         return events;
//     }
  
//     return events.filter((event) => {
//         const eventName = event.name.toLowerCase();
//         return eventName.includes(query);
//     });
//   };

//   useEffect(getEvents, [getEvents])

//       return 

//       <ul>
//       {FilteredEvents.map(event => (
//           <li key={event.key}>{event.name}</li>
//       ))}
//   </ul>

//   </div>
// }

//   const mapStateToProps = (state) => {
//   return {events: state.events}


// }


// import {useState} from "react"
// import {useEffect} from "react"
// import {getEvents} from '../redux/actionCreators'
// import { connect } from 'react-redux'
// import EventCard from "../components/EventCard"
// import EventCardSearch from "../components/EventCardSearch"
// import SearchBar from './components/SearchBar';
// import FilterEvents from './components/FilterEvents';


// export default function SearchResults() {

// const { search } = window.location;
// const query = new URLSearchParams(search).get('results');
// const [searchQuery, setSearchQuery] = useState(query || '');
// const FilteredEvents = EventCardSearch(events, searchQuery);


// return (
//     <div>
//         <SearchBar
//             searchQuery={searchQuery}
//             setSearchQuery={setSearchQuery}
//         />
//         <ul>
//             {FilteredEvents.map(event => (
//                 <li key={event.key}>{event.name}</li>
//             ))}
//         </ul>
//     </div>
// );
// }
import {useEffect} from "react"
import {getEvents} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Routes, Route, Outlet } from "react-router-dom";
import EventCard from "../components/EventCard"
import SearchBar from "../components/SearchBar"
import { getSearchResults } from '../redux/actionCreators';
import { useParams } from 'react-router-dom';




function SearchResults({getSearchResults, events}){

    const searchQuery = useParams().searchQuery
      

    useEffect(() => {
        getSearchResults(searchQuery)
      }, [getSearchResults, searchQuery])


      return <div className="cards">
    {events.map(event => <EventCard {...event} key={event.id}/>)}
    <Outlet />
  </div>
}

  const mapStateToProps = (state) => {
  return {events: state.events}

}


export default connect(mapStateToProps, { getSearchResults })(SearchResults)