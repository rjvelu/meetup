import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

function MeetupList(props) {

    // When data is passed as array from AllMeetups.js
    return (
       <ul className={classes.list}>
            {props.meetups.map((argument) => {
                return (
                    <MeetupItem key={argument.id}
                        //This the passing as individual arugments
                        // id={argument.id}
                        // image={argument.image}
                        // title={argument.title}
                        // address={argument.address}
                        // description={argument.description}

                        //Below method is passing the whole object as a single props
                        argument={argument}
                    />

                )
            })}
        </ul>
    )}

    // When data is passed as object instead of array from AllMeetups.js

    // Converts the object to an array

    // const meetupsArray = Object.values(props.meetups);
    // return (
    //     <ul className={classes.list}>
    //         {meetupsArray.map(argument => {
    //             return (
    //                 <MeetupItem key={argument.id}
    //                     argument={argument}
    //                 />

    //             )
    //         })}
    //     </ul>
    // )}

export default MeetupList; 