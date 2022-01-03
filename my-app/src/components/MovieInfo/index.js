import React from "react";
import PropTypes from 'prop-types';

import API from '../../API';

// Components
import Thumb from "../thumbnails";
import Rate from "../Rating";

// Context
import { Context } from "../../context";

// Image
import NoImg from "../../images/no_image.jpg"

// Styles
import { Wrapper,Content,Text } from "./movieInfo.style";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieInfo = ({movie}) => {

    const [user] = React.useContext(Context);

    const handleRating = async value =>{
        const rate = await API.rateMovie(user.sessionID, movie.id, value);
        alert("You've successfully rated this Movie!");
    }

    return(
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImg} clickable={false} />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div className="info">
                            <h3>RATING</h3>
                            <div className="rating"> {movie.vote_average} </div>
                        </div>
                        <div className="info">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S':''}</h3>
                            { movie.directors.map(director =>(
                                <p key={director.credit_id}> {director.name} </p>
                            ))}
                        </div>
                        <div className="info">
                            <h3>GENRE{movie.genres.length > 1 ? 'S':''}</h3>
                            <div className="genre">
                                { movie.genres.map(genre =>(
                                    <p key={genre.id}> {genre.name} </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {user && 
                        (<div>
                            <h3>RATE MOVIE</h3>
                            <Rate callback={handleRating}/>
                        </div>)
                    }
                </Text>
            </Content>
        </Wrapper>
    )
}
MovieInfo.propTypes = {
    movie: PropTypes.object
}

export default MovieInfo;