import { createAction, createReducer } from '@reduxjs/toolkit';
import { Match } from '../models/data';
import jsonData from '../data/data.json';





const initialState: Match[] = jsonData.matchData;

const allMatches = createAction('Get all matches');


const actions = { allMatches };

const reducer = createReducer(initialState, {
    [allMatches.toString()]: () => {
        return initialState;
    }, 
});

export { reducer, actions };