import {ADD_TO_LIST, DELETE_FROM_LIST} from './constants';
import {combineReducers} from 'redux';

const initialState = {
    places: [
        {
            id:1,
            name: 'Portugal'
        },
        {
            id:2,
            name: 'Nicaragua'
        },
    ],

    subPlaces: [
        {
            placeId: 1,
            checkboxCounter: 0,
            placesList: [
                {placeId:1,id: 11, name: "Aasiya", value: "aasiya", status: false,},
                {placeId:1,id: 22, name: "Luvleen", value: "luvleen", status: false},
                {placeId:1,id: 33, name: "Rey", value: "rey",status: false},
            ]
        },
        {
            placeId:2,
            checkboxCounter: 0,
            placesList: [
                {placeId:2,id: 44,name: "Deveedas", value: "deveedas", status: false},
                {placeId:2,id: 55,name: "Obasey", value: "obasey", status: false},
                {placeId:2,id: 66,name: "Xenie", value: "xenie", status: false},
            ]
        },
    ]
}

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST: {
            const {placeId, id} = action.payload;
            const newSubPlaces = [...state.subPlaces];
            for(let i=0; i<newSubPlaces.length; i++){
                if(newSubPlaces[i].placeId === placeId){
                    for(let j=0; j<newSubPlaces[i].placesList.length; j++){
                        if(newSubPlaces[i].placesList[j].id === id){
                            newSubPlaces[i].placesList[j].status = true;
                            ++newSubPlaces[i].checkboxCounter;
                        }   
                    }
                }
            }
            return {...state, subPlaces: newSubPlaces }
        }
        case DELETE_FROM_LIST: {
            const {placeId, id} = action.payload;
            const newSubPlaces = [...state.subPlaces];
            for(let i=0; i<newSubPlaces.length; i++){
                if(newSubPlaces[i].placeId === placeId){
                    for(let j=0; j<newSubPlaces[i].placesList.length; j++){
                        if(newSubPlaces[i].placesList[j].id === id){
                            newSubPlaces[i].placesList[j].status = false;
                            --newSubPlaces[i].checkboxCounter;
                        }
                    }
                }
            }
            return {...state, subPlaces: newSubPlaces }
        }
        default: return state;
    }
}

export default combineReducers({
    listReducer
})