import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites(){
    const favContext = useContext(FavoritesContext);
    let contentIsPresent = favContext.totalFavorites;
    if(contentIsPresent === 0){
            contentIsPresent= <section>No Favorite Added</section>
    } else {
        contentIsPresent = <MeetupList meetups={favContext.favorites}/>
    }
    return (
    <section>
        <h1>My Favorite</h1>
        {contentIsPresent}
    </section>)
}

export default Favorites;