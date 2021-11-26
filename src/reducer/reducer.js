
import * as actions from '../redux/actiontypes';

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.SELECT_CHANGED: {
            return [...state, {
                value: action.payload.value,
                text: action.payload.text
            }]
        }
        default: { return state; }
    }
}


