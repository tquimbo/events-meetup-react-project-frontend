

// import { useEffect } from "react";
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchSearchResults } from '../redux/searchActions.ts';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";

// const SearchResults = ({ loading, events, error }) => {
//   const { input } = useParams(); 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSearchResults(input));
//   }, [dispatch, input]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!events || events.length === 0) {
//     return <p>No results found.</p>;
//   }

//   return (
//     <div>
//       <ul className="no-bullets">
//       {events.map((event) => {
//         const date = new Date(event.formattedDatetime);
//         const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
//         const day = date.getDate();
//         const month = date.toLocaleString('default', { month: 'short' });
//         let hours = date.getHours();
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const period = hours >= 12 ? 'pm' : 'am';
//         hours = hours % 12;
//         hours = hours ? hours : 12;


//         return (
//           <li key={event.id}>
//           <Link to={`/events/${event.id}`} className="event-link">
//             <div className="event-left">
//               <p>{`${month} ${day}`}</p>
//               <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
//             </div>
//             <div className="event-right">
//               <h3>{event.performerName}</h3>
//               <p>{`${event.venueName} - ${event.venueAddress}`}</p>
//             </div>
//           </Link>
//         </li>
//         );
//       })}
//       </ul>

//       <style jsx>{`
//        .no-bullets {
//         list-style-type: none;
//       }
      
//       .event-link {
//         display: flex;
//         justify-content: space-between;
//         // border: 1px solid #ccc;
//         padding: 10px;
//       }
//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     events: state.events,
//   };
// };

// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
      //   margin-bottom: 10px;
      //   text-decoration: none;
      //   color: inherit;
      //   transition: background-color 0.3s;
      // }
      
      // .event-link:hover {
      //   background-color: #f5f5f5;
      // }
      
      // .event-left,
      // .event-right {
      //   flex: 1;
      // }
//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     events: state.events,
//   };
// };

// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);
// import { useEffect } from "react";
// import { connect } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { fetchSearchResults } from '../redux/searchActions.ts';
// import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";

// const SearchResults = ({ loading, events, error }) => {
//   const { input } = useParams(); 
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSearchResults(input));
//   }, [dispatch, input]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!events || events.length === 0) {
//     return <p>No results found.</p>;
//   }

//   return (
//     <div>
//       <ul className="no-bullets">
//       {events.map((event) => {
//         const date = new Date(event.formattedDatetime);
//         const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
//         const day = date.getDate();
//         const month = date.toLocaleString('default', { month: 'short' });
//         let hours = date.getHours();
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const period = hours >= 12 ? 'pm' : 'am';
//         hours = hours % 12;
//         hours = hours ? hours : 12;

//         return (
//           <li key={event.id}>
//             <Link to={`/events/${event.id}`} className="event-link">
//               <div className="event-left">
//                 <p>{`${month} ${day}`}</p>
//                 <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
//               </div>
//               <div className="event-right">
//                 <h3>{event.performerName}</h3>
//                 <p>{`${event.venueName} - ${event.venueAddress}`}</p>
//               </div>
//             </Link>
//           </li>
//         );
//       })}
//       </ul>

//       <style jsx>{`
//         .no-bullets {
//           list-style-type: none;
//         }

//         .event-link {
//           display: flex;
//           justify-content: space-between;
//           padding: 10px;
//           text-decoration: none; /* Remove underline from links */
//           color: white; /* Set text color to white */
//         }

//         .event-link:hover {
//           text-decoration: none; /* Ensure underline is not added on hover */
//         }

//         .event-left, .event-right {
//           color: white; /* Ensure all text remains white */
//         }
//       `}</style>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     events: state.events,
//   };
// };

// export default connect(mapStateToProps, { fetchSearchResults })(SearchResults)
import { useEffect } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchSearchResults } from '../redux/searchActions.ts';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const SearchResults = ({ loading, events, error }) => {
  const { input } = useParams(); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults(input));
  }, [dispatch, input]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!events || events.length === 0) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      <ul className="no-bullets">
      {events.map((event) => {
        const date = new Date(event.formattedDatetime);
        const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;

        return (
          <li key={event.id}>
            <Link to={`/events/${event.id}`} className="event-link">
              <div className="event-left">
                <p>{`${month} ${day}`}</p>
                <p>{`${dayOfWeek} - ${hours}:${minutes}${period}`}</p>
              </div>
              <div className="event-right">
                <h3>{event.performerName}</h3>
                <p>{`${event.venueName} - ${event.venueAddress}`}</p>
              </div>
            </Link>
          </li>
        );
      })}
      </ul>

      <style jsx>{`
        .no-bullets {
          list-style-type: none;
        }

        .event-link {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          text-decoration: none; /* Remove underline from links */
          color: white; /* Set text color to white */
          transition: background-color 0.3s ease; /* Add transition for hover effect */
        }

        .event-link:hover {
          background-color: rgba(255, 255, 255, 0.1); /* Add a subtle background color change on hover */
        }

        .event-left, .event-right {
          color: white; /* Ensure all text remains white */
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps, { fetchSearchResults })(SearchResults);