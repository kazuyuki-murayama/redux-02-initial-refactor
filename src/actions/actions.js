import { COUNT_UP } from './consts/types';
import { COUNT_DOWN } from './consts/types';

export const countUpActionCreator = (count) => ({
    type: COUNT_UP,
    payload: {
        count
    }
});
export const countDownActionCreator = (count) => ({
    type: COUNT_DOWN,
    payload: {
        count
    }
});
