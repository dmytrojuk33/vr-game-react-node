import React from 'react';
import GMDraws from '../../src/components/GMDraws';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<GMDraws {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { recentBalls: [4, 67, 89, 90, 29] };
  const wrapper = setup(props);
  const gmDrawsComponent = findByTestAttr(wrapper, 'component-gmdraws');
  expect(gmDrawsComponent.length).toBe(1);
});
