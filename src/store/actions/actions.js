import { API_KEY } from '../keys';

const HEADERS = {
    headers: {
        'x-api-key': API_KEY
    }
}

const errorLogger = (error) => console.log(error)

const DOG_API_URL = 'https://api.TheDogAPI.com/v1/';


export const FETCH_BREED_LIST_REQUEST = 'FETCH_BREED_LIST_REQUEST';

export function fetchBreedList(){

    return function (dispatch, getState) {
        const {currentPage, pageSize} = getState();
        return fetch(`${DOG_API_URL}breeds`, HEADERS)
            .then(response => response.json(), errorLogger)
            .then(json => fetchImagesForCurrentPage(json, currentPage, pageSize))
            .then(json => dispatch(receiveBreedList(json)))
    }
}


export const RECEIVE_BREED_LIST = 'RECEIVE_BREED_LIST';

export function receiveBreedList(json) {
    return {
        type: RECEIVE_BREED_LIST,
        breedList: json
    }
}


export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export function changeCurrentPage(currentPage = 0) {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage
    }
}

export const CHANGE_PAGE_SIZE = 'CHANGE_PAGE_SIZE';

export function changePageSize(pageSize = 20) {
    return {
        type: CHANGE_PAGE_SIZE,
        pageSize
    }
}

export const FETCH_IMAGES_FOR_CURRENT_PAGE = 'FETCH_IMAGES_FOR_CURRENT_PAGE';

export function fetchImagesForCurrentPage(breedList, currentPage, pageSize) {
    const startIndex = currentPage * pageSize;
    const endIndex = (currentPage + 1) * pageSize;
    const promiseList = [];

    for (let i = startIndex; i < endIndex; i++) {
        const breedId = encodeURIComponent(breedList[i].id);
        promiseList.push(fetch(`${DOG_API_URL}images/search?breed_id=${breedId}&limit=1`, HEADERS))
    }
    return Promise.all(promiseList)
            .then(results => results.map(response => response.json()), errorLogger)
            .then(jsonResults => Promise.all(jsonResults))
            .then(breedImages => {
                for (let i = startIndex, j = 0; i < endIndex; i++, j++) {
                    if (breedImages[j].length && !breedList[i].url) {
                        breedList[i].image_url = breedImages[j][0].url
                    }
                }
                return breedList
            });

}


