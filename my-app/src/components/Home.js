import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// Components
import HeroImage from './HeroImage'
import Grid from "./movieGrid";
import Thumb from "./thumbnails";
import Spinner from "./Spinner";
import SearchBar from "./searchBar";
import Bottombtn from "./BottomBtn";
import Footer from "./Footer";

// Image
import NoImg from "../images/no_image.jpg";

const Home = () =>{
    const { hello, loading, error, searchTerm, setSearchTerm, setIsLoading } = useHomeFetch();

    if (error) return <div>Something went wrong...</div>

    return (
        <> 
           {!searchTerm && hello.results[0] ? (
                <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${hello.results[0].backdrop_path}`} 
                title={`${hello.results[0].original_title}`}
                text={`${hello.results[0].overview}`}
                />
           ) : null}

           <SearchBar setSearchTerm={setSearchTerm}/>

           <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}> 
                {hello.results.map(movie => (
                    <Thumb key={movie.id} clickable image={movie.poster_path ? (IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path) : NoImg} movieID={movie.id} />
                ))}
           </Grid>

           {loading && <Spinner/>}
           
           {
               hello.page < hello.total_pages && !loading && (
                   <Bottombtn text='Load More' callback={()=> setIsLoading(true)}/>
               )
           }

           <Footer/>
        </>
    );
};

export default Home;