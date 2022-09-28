import { createAction, createReducer } from '@reduxjs/toolkit';
import { Match } from '../models/data';
import jsonData from '../data/data.json';





const initialState: Match[] = []
const setAllMatches = createAction<Match[]>('all games')



const allMatches = createAction('Get all matches');


const actions = { allMatches };

const reducer = createReducer(initialState, {
    [allMatches.toString()]: (state, action) => {
        const
    }
    [allMatches.toString()]: () => {
        return initialState;
    }, 

});

export { reducer, actions };