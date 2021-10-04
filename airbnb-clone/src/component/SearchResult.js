import React from 'react'
import './SearchResult.css'
import { FavoriteBorder, Star } from "@material-ui/icons"

function SearchResult({ resource }) {
   return (
      <div className="searchResult">
         <img src={resource.img} alt=""></img>
         <FavoriteBorder className="searchResult__heart" />
         <div className="searchResult__info" >
            <div className="searchResult__infoTop">
               <p>{resource.location}</p>
               <h3>{resource.title}</h3>
               <p>____</p>
               <p>{resource.description}</p>
            </div>
            <div className="searchResult__infoBottom">
               <div className="searchResult__stars">
                  <Star className="searchResult__star" />
                  <p><strong>{resource.star}</strong></p>
               </div>
               <div className="searchResult__price">
                  <h2>{resource.price}</h2>
                  <p>{resource.total}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SearchResult
