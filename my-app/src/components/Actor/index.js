import React from "react";

import PropTypes from 'prop-types';

import { Wrapper, Image } from "./actor.style";

const Actor = ({name, character, imgurl}) => (
    <Wrapper>
        <Image src={imgurl} alt="Thumbnail"/>
        <h3>{name}</h3>
        <p>As</p>
        <p>{character}</p>
    </Wrapper>
)

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imgurl: PropTypes.string,
}

export default Actor;