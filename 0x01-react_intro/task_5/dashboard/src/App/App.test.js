import React from 'react';
import App from'./App';
import {shallow} from 'enzyme';

const wrapper= shallow(<App/>)
test('that App renders without crashing', () => {
    shallow(<App />);

});
test('renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').exists()).toEqual(true);
});

test('renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').exists()).toEqual(true)
});

test('renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').exists()).toEqual(true)
});