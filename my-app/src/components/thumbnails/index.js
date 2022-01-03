import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { Image } from "./thumb.style";

const Thumb = ({image, movieID, clickable}) => ( 
    <div>
        {clickable ? (
        <Link to={`/${movieID}`}> 
            <Image src={image} alt='Movie-Thumbnail' />
        </Link>
        ) : <Image src={image} alt='Movie-Thumbnail' /> 
        }
    </div>
)

Thumb.propTypes = {
    image: PropTypes.string,
    movieID: PropTypes.number,
    clickable: PropTypes.bool
}

export default Thumb;