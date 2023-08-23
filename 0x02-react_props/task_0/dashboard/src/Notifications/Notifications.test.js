import React from 'react';
import Notifications from './Notifications'
import {shallow} from 'enzyme';

const wrapper = shallow(<Notifications />);
test('Notifications renders without crashing,', () => {
    shallow(<Notifications />);
});

test('Notifications renders three <li /> items', () => {
    expect(wrapper.find('li').exists()).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
});


