import { COUNT_UP, COUNT_DOWN} from '../actions/consts/types';

const initialState = {
    count: 0
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COUNT_UP:
            return {
                count: ++action.payload.count
            };
        case COUNT_DOWN:
            return {
                count: --action.payload.count
            };
        default:
            return state;
    }
}
