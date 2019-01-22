import { API_KEY } from '../keys';

const HEADERS = {
    headers: {
        'x-api-key': API_KEY
    }
}

const errorLogger = (error) => console.log(error)

const DOG_API_URL = 'https://api.TheDogAPI.com/v1/';

const DOG_CEO_API = '';


export const FETCH_BREED_LIST_REQUEST = 'FETCH_BREED_LIST_REQUEST';

export function fetchBreedList(){
    return function (dispatch) {
        return fetch(`${DOG_API_URL}breeds`, HEADERS).then(response => response.json(), errorLogger)
        .then(json => dispatch(receiveBreedList(json)))
        .then(() => console.log('AFTER: FETCH+BREEDLIST'))
    }
}


export const RECEIVE_BREED_LIST = 'RECEIVE_BREED_LIST';

export function receiveBreedList(json) {
    return {
        type: RECEIVE_BREED_LIST,
        breedList: json
    }
}


export const FETCH_BREED_IMAGE = 'FETCH_BREED_IMAGE';

export function fetchBreedImage(breedId, limit = 1){
    const encodedBreed = encodeURIComponent(breedId);
    const encodedLimit = encodeURIComponent(limit);

    return function (dispatch) {
        return fetch(`${DOG_API_URL}images/search?breed_id=${encodedBreed}&limit=${encodedLimit}`, HEADERS)
        .then(response => response.json(), errorLogger)
        .then(json => dispatch(receiveBreedImage(json)))
    }
}

export const RECEIVE_BREED_IMAGE = 'RECEIVE_BREED_IMAGE';

export function receiveBreedImage(json) {
    console.log('JSON:BREEDINDEX', json[0])
    return {
        type: RECEIVE_BREED_IMAGE,
        image_url: json.url,
        breedId: json[0].breeds[0].id,
    }
}

