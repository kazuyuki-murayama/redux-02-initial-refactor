import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import reducer from './reducers/reducer';
import Component from './components/component';

const store = createStore(reducer);
store.subscribe(() => renderCountApp(store));

function renderCountApp(store) {
    render(
        <Component store={store} />,
        document.getElementById('root')
    );
}
renderCountApp(store);