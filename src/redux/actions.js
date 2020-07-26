import {ADD_TO_LIST} from './constants';
import {DELETE_FROM_LIST} from './constants';

export const addToList = currentItem => {
    return {
        type: ADD_TO_LIST,
        payload: currentItem
    }
}

export const deleteFromList = currentItem => {
    return {
        type: DELETE_FROM_LIST,
        payload: currentItem
    }
}