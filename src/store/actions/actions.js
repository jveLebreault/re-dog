import { API_KEY } from '../keys';

const HEADERS = {
    headers: {
        'x-api-key': API_KEY
    }
}

const errorLogger = (error) => console.log(error)

const DOG_API_URL = 'https://api.TheDogAPI.com/v1/';

export const FETCH_BREEDS = 'FETCH_BREEDS';

export function fetchBreeds() {
    return function (dispatch) {
        return fetch(`${DOG_API_URL}breeds`, HEADERS)
            .then(response => response.json(), errorLogger)
            .then(json => dispatch(receiveBreedList(json)))
    }
}


// export const FETCH_BREED_LIST_REQUEST = 'FETCH_BREED_LIST_REQUEST';

// export function fetchBreedList(currentPage, pageSize){
//     return function (dispatch) {
//         return fetch(`${DOG_API_URL}breeds`, HEADERS)
//             .then(response => response.json(), errorLogger)
//             .then(json => fetchImagesForCurrentPage(json, currentPage, pageSize))
//             .then(json => dispatch(receiveBreedList(json)))
//     }
// }


export const RECEIVE_BREED_LIST = 'RECEIVE_BREED_LIST';

export function receiveBreedList(json) {
    return {
        type: RECEIVE_BREED_LIST,
        breedList: json
    }
}


export const NAVIGATE_TO_PAGE = 'NAVIGATE_TO_PAGE';

export function navigateToPage(toPage, pageSize) {
    return function (dispatch, getState) {
        const {breedList} = getState();
        fetchImagesForCurrentPage(breedList, toPage, pageSize)
            .then(breeds => dispatch(receiveBreedList(breeds.slice())));
    }
}

export const FETCH_IMAGES_FOR_CURRENT_PAGE = 'FETCH_IMAGES_FOR_CURRENT_PAGE';

export function fetchImagesForCurrentPage(breedList, currentPage, pageSize) {
    const startIndex = currentPage * pageSize;
    const endIndex = (currentPage + 1) * pageSize;
    const promiseList = [];

    for (let i = startIndex; i < endIndex; i++) {
        if(breedList[i]) {
            const breedId = encodeURIComponent(breedList[i].id);
            promiseList.push(fetch(`${DOG_API_URL}images/search?breed_id=${breedId}&limit=1`, HEADERS))
        } else {
            break;
        }

    }
    return Promise.all(promiseList)
            .then(results => results.map(response => response.json()), errorLogger)
            .then(jsonResults => Promise.all(jsonResults))
            .then(breedImages => {
                for (let i = startIndex, j = 0; i < endIndex; i++, j++) {
                    if (breedImages[j] && breedImages[j].length && !breedList[i].url) {
                        breedList[i].image_url = breedImages[j][0].url;
                    }
                }
                return breedList
            });

}


