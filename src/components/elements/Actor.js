import React from 'react';
import PropTypes from 'prop-types';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import noImage from './../images/no_image.jpg';
import {StyledActor} from '../styles/StyledActor';

const Actor = ({actor}) =>{
    return (
       <StyledActor>
           <img  src = {
               actor.profile_path
               ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
               : noImage
           } 
           alt = "actor" loading="lazy"/>
           <span className = "actor-name">{actor.name}</span>
        <span className = "actor-character">{actor.character}</span>
       </StyledActor>
    )
}

Actor.propTypes = {
    actor: PropTypes.object
}
export default Actor;