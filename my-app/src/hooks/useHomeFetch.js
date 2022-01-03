import { useState,useEffect } from "react";
// API
import API from '../API';
// Helpers
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [hello, setHello] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async (page, searchTerm ="") => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setHello(prev => ({
                ...movies,
                results: 
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }catch(error) {
            setError(true);
        }
        setLoading(false);
    }

    // initial render and search
    useEffect(()=>{
        if (!searchTerm){
            const sessionState = isPersistedState('homeState');

            if(sessionState){
                setHello(sessionState);
                return;
            }
        }

        setHello(initialState);
        fetchMovies(1, searchTerm);

    }, [searchTerm]);

    // Load More
    useEffect(()=>{
        if (!isLoading) return;

        fetchMovies((hello.page + 1), searchTerm);
        setIsLoading(false);

    }, [isLoading, searchTerm, hello.page]);
    // means useEffect renders every time searchTerm changes


    // Write The Session Storage
    useEffect(()=>{
        if(!searchTerm){
            sessionStorage.setItem('homeState', JSON.stringify(hello))
        }
    },[searchTerm, hello])

    return { hello, loading, error, searchTerm ,setSearchTerm , setIsLoading };
}