import React from 'react';
import Liste from './Liste';
import PropTypes from 'prop-types';

const Card = ({movieArray}) =>{
    return (
        <div>
            {movieArray.map((film,key)=>(
                <Liste film={film} key={key}/>
            ))}
            
        </div>
    )
}
Card.propTypes = {
    movieArray: PropTypes.array.isRequired,
  };

export default Card;
