import {SELECT_CHANGED} from '../../../redux/actiontypes';
import reducer from "../../../reducer/reducer";


const initialState = [];

describe("Reducer testing", () => {

    it('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    
    it('returns modified state based on payload', () => {
        expect(reducer(initialState, {
            type: SELECT_CHANGED,
            payload: {
                value: "One",
                text: "Plan Code"
            },
        })).toEqual([{
            ...initialState,
            "text":"Plan Code",
            "value":"One"
        }]);
    });
    
});
