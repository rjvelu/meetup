import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
// import axios from "axios";

// const dataDummy = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState({});

  useEffect(() => {
    // setLoading(true);

    fetch('https://meetup-react-721fd-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => 
        response.json()
      
      )
      .then((data) => {
        console.log("All data as object",data);
        //Comment this block to pass data as object
        const meetups = [];

        for (const key in data) {
          console.log("KEY",key); 
          const meetup = {
            id: key,
            ...data[key]
          };
          console.log("id",meetup.id);
          console.log("DATA",meetup);
          meetups.push(meetup);
        };
        setOutput(meetups);
         //Comment this block to pass data as object
        setLoading(false);
        // setOutput(data); // To be used when data is passed as object
      });

    // const data2 = async () => {

    //  const getdata =  await axios.get('https://meetup-react-721fd-default-rtdb.firebaseio.com/meetups.json');
    //  try{
    //   setLoading(false);
    //   setData(getdata.data);
    //   console.log(getdata.data);

    //  } catch(err){
    //   console.log(err);

    //  }

    // }

  }, []);


  if (loading) {
    return (
      <div>Loading data....</div>
    )
  }
  return (
    <div>
      <h1> All Meet </h1>
      <MeetupList meetups={output} />
    </div>
  )
}

export default AllMeetups;