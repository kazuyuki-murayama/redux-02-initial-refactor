import React from 'react';
import { countUpActionCreator,countDownActionCreator } from '../actions/actions';
import {COUNT_UP, COUNT_DOWN} from '../actions/consts/types';

export default function Component({ store }) {
    const { count } = store.getState();
    return (
        <div>
            <span>{count}</span>
            <br/>
            <button value={ COUNT_UP } onClick={() => store.dispatch(countUpActionCreator(count))}>Count Up.</button>
            <br/>
            <button value={ COUNT_DOWN } onClick={() => store.dispatch(countDownActionCreator(count))}>Count Down.</button>
        </div>
    );
}
