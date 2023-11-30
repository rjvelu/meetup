import { createContext, useState } from "react";


//createContext() gives a context object which is react component
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteItem) => {},
    removeFavorites: (itemId) =>{},
    itemIsFavorites: (itemId) =>{}
    
});

export function FavoriteContextProvider(props){

    const [userFavorities, setUserFavorites] = useState([]);

    function addFavoritesHandler(favoriteItem){
        setUserFavorites((PrevItem) =>{
            return PrevItem.concat(favoriteItem)
        })
    }

    function removeFavoritesHandler(itemId){
        setUserFavorites((PrevItem) =>{
            return PrevItem.filter(meetup => meetup.id !== itemId )
        })
    }

    function itemIsFavoritesHandler(itemId){
        return userFavorities.some(meetup => meetup.id === itemId)
    }

    const context = {
        favorites: userFavorities,
        totalFavorites: userFavorities.length,
        addFavorites: addFavoritesHandler,
        removeFavorites: removeFavoritesHandler,
        itemIsFavorites: itemIsFavoritesHandler
    }
    return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>)
}

export default FavoritesContext;