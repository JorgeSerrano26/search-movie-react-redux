import React, { useRef, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';

const OMDB_KEY = "1802e647";

const ListOfMovies = () => {
    const movies = useSelector(state => state.movies);
    const [movieTitle, setMovieTitle] = useState('');
    const cancelSource = useRef(null);
    const dispatch = useDispatch();

    const titleOnChange = (event) => {
        const query = event.target.value;
        if (query !== '') {
            fetchMovies(query);
        }
        setMovieTitle(query);
    }


    const fetchMovies = async (title) => {
        if (cancelSource.current) {
            cancelSource.current.cancel();
        }
        cancelSource.current = axios.CancelToken.source();

        dispatch(fetchMoviesRequest());
        try {
            const res = await axios.get(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${title}`, {
                cancelToken: cancelSource.current.token
            });
            const response = res.data;
            if (response.Response === "True") {
                dispatch(fetchMoviesSuccess(response.Search));
            } else {
                throw new Error(response.Error)
            }
        } catch (error) {
            dispatch(fetchMoviesFailure(error.message))
        }
    }

    return <div style={{ padding: "10px" }}>
        <h1>Peliculas</h1>
        <div>
            <input type="text" onChange={titleOnChange} />
        </div>
        <div style={{
            padding: "10px", display: "flex", flexDirection: "column",
            alignItems: "center"
        }}>
            {
                movies.loading
                    ? <p>Buscando...</p>
                    : (movies.movies.length > 0)
                        ? movies.movies.map(movie => <Movie
                            id={movie.imdbID}
                            title={movie.Title}
                            image={movie.Poster}
                            year={movie.Year}
                        />)
                        : movies.error === ''
                            ? <p>{movies.error}</p>
                            : movieTitle !== '' && <p>Perdon! <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">😢</span> No se encontraron resultados!</p>

            }
        </div>
    </div>
}

export default ListOfMovies;