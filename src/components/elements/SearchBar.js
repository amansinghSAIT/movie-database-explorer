import React, {useState} from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar';

const SearchBar = ({searchMovies}) =>{
    const [inputValue,setInputValue] = useState('');
   const doChangeInput = (e) =>{
        const {value} = e.target;
        setInputValue(value);
   } 
   const doSearch = () => {
    searchMovies(inputValue);
   }

   return(
       <StyledSearchBar>
           <StyledSearchBarContent>
               <FontAwesome className = "fa-search" name = "search" size = "2x" />
               <input type = "text" 
                    placeholder = "Search Movie and click Enter"
                    onChange = {doChangeInput}
                    value = {inputValue}
                    onKeyPress={e =>  e.key === 'Enter' && doSearch() } />
           </StyledSearchBarContent>
       </StyledSearchBar>
   )
}
SearchBar.propTypes = {
    searchMovies:PropTypes.func
}
export default SearchBar;