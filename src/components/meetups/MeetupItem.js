import Card from '../ui/Card';
import classes from './MeetupItem.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

// Below is the method whole object is passed from MeetupList

function MeetupItem(props) {

    const favContext = useContext(FavoritesContext);
    const isItemFav = favContext.itemIsFavorites(props.argument.id)
    console.log(isItemFav)

    function toggleFavoriteStatusHandler() {
        
        if (isItemFav) {
            favContext.removeFavorites(props.argument.id);
        } else {
            favContext.addFavorites({
                id: props.argument.id,
                title: props.argument.title,
                description: props.argument.description,
                image: props.argument.image,
                address: props.argument.address
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.argument.image} alt={props.argument.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.argument.title}</h3>
                    <address>{props.argument.address}</address>
                    <p>{props.argument.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {isItemFav ? 'Remove From Favorite' : 'Add To Favorites'}
                    </button>
                </div>
            </Card>
        </li>


    )
}

// (or) ==> Below is the method used when the inividual items are passed as arugments from MeetupList
// function MeetupItem(props) {
//     return (
//       <li className={classes.item}>
//         <div className={classes.image}>
//           <img src={props.image} alt={props.title} />
//         </div>
//         <div className={classes.content}>
//           <h3>{props.title}</h3>
//           <address>{props.address}</address>
//           <p>{props.description}</p>
//         </div>
//         <div className={classes.actions}>
//           <button>To Favorites</button>
//         </div>
//       </li>
//     );
//   }


export default MeetupItem;