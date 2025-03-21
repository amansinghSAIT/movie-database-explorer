import React from 'react';
import PropTypes from 'prop-types';

import {StyledLoadMoreBtn} from '../styles/StyledLoadMoreBtn';
const LoadMoreBtn = ({text, callback}) =>{
   return(
   <StyledLoadMoreBtn type = "button" onClick = {callback}>{text}</StyledLoadMoreBtn>
   )
}
LoadMoreBtn.propsTypes = {
   text: PropTypes.string,
   callback: PropTypes.func
}
export default LoadMoreBtn;