import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";
export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
    .then(res=>res.json())
    .then(json => json.data.movies);
};

/*
import { tryFunctionOrLogError } from "apollo-utilities";

export const people = [
    {
        id : '1',
        name : 'choongkyu',
        age : 25,
        gender : 'man'
    },
    {
        id : '2',
        name : '경민',
        age : 26,
        gender : 'trans'
    },
    {
        id : '3',
        name : '성재',
        age : 25,
        gender : 'woman'
    },
    {
        id : '4',
        name : '건명',
        age : 24,
        gender : 'man'
    },
    {
        id : '5',
        name : 'jaebin',
        age : 25,
        gender : 'woman'
    }
];

export let movies = [
    {
        id: 1,
        name : 'star wars',
        score : 41
    },
    {
        id: 2,
        name : 'money',
        score : 12
    },
    {
        id: 3,
        name : 'criminal',
        score : 42
    },
    {
        id: 4,
        name : 'TV show',
        score : 32
    },
    {
        id: 5,
        name : 'one piece',
        score : 100
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filterPeople = people.filter(person => person.id === String(id));
    return filterPeople[0];
};

export const getById = id => {
    const filterMovies = movies.filter(movie => movie.id === id);
    return filterMovies[0];
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movies = cleanMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};*/