import { createStore } from 'redux';
import { combineReducers } from "redux";
import reducer from '../reducer/reducer';
import reducer2 from '../reducer/reducer2';

const rootReducer = combineReducers({
    main: reducer,
    additional: reducer2
})

const store = createStore(rootReducer);

export default store;