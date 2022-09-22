import { combineReducers } from "redux";
import { reducer as matchesReducer } from '../features/matchesReducer';


const rootReducer = combineReducers({
    matches: matchesReducer,
    
});

export { rootReducer };