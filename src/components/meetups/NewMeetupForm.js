import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleRef = useRef();
    const imgRef = useRef();
    const addrRef = useRef();
    const despRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const titleInput = titleRef.current.value;
    const imageInput = imgRef.current.value;
    const addressInput = addrRef.current.value;
    const descriptionInput = despRef.current.value;

    const meetupData = {
        title : titleInput,
        image: imageInput,
        address: addressInput,
        description: descriptionInput
    };
    props.addData(meetupData);
    console.log("The entered meetup data is", meetupData);

    titleRef.current.value = "";
    imgRef.current.value= "";
    addrRef.current.value= "";
    despRef.current.value= "";
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imgRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addrRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={despRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;