import NewMeetupForm from "../components/meetups/NewMeetupForm";
import axios from "axios";
import { useHistory } from 'react-router-dom';

function NewMeetupsPage(props) {
  const history = useHistory();
  // // ============================================ POST - Promise using asyc and await =========================
const submitData =  async (meetupData) => {
  const output = await axios.post("https://meetup-react-721fd-default-rtdb.firebaseio.com/meetups.json", meetupData)
  try{
    console.log('Success:', output.data);
    history.replace('/');
  }catch(err){
    console.log('Error', err)

  }
}
// // ============================================POST - Promise using .then and .error =========================
//   function submitData(meetupData){
//     fetch(
//       'https://meetup-react-721fd-default-rtdb.firebaseio.com/meetups.json', {
//       method: 'POST',
//       body: JSON.stringify(meetupData),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })
//    .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Handle successful response
//       console.log('Success:', data);
//     }) .then(() => {
//       // Handle successful response
//       history.replace('/');
//     })
//     .catch(error => {
//       // Handle errors
//       console.error('Error:', error);
//     });

//   }
    return (
        <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addData={submitData} />
    </section>
    )
}

export default NewMeetupsPage;