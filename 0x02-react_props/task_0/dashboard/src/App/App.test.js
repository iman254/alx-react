import React from 'react';
import App from'./App';
import {shallow} from 'enzyme';

const wrapper= shallow(<App/>)
test('that App renders without crashing', () => {
    shallow(<App />);

});
