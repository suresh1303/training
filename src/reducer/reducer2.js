
import * as actions from '../redux/actiontypes';

export default function reducer2(state = [], action) {
    switch (action.type) {
        case actions.SELECT2_CHANGED: {
            return [...state, {
                value: action.payload.value,
                text: action.payload.text
            }]
        }
        default: { return state; }
    }
}


