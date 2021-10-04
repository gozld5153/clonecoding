import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core"
import SearchResult from "./component/SearchResult"
import searchData from './data/searchData'

function SearchPage() {
   return (
      <div className="searchPage">
         <div className="searchPage__info">
            <p>
               62 stays &middot; 26 august to 30
               august &middot; 2 guest
            </p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">
               Cancellation Flexibility
            </Button>
            <Button variant="outlined">
               Type of place
            </Button>
            <Button variant="outlined">
               Price
            </Button>
            <Button variant="outlined">
               Rooms and beds
            </Button>
            <Button variant="outlined">
               More filter
            </Button>
         </div>
         {searchData.map(el => <SearchResult resource={el}/>)}
            
      </div>
   )
}

export default SearchPage
