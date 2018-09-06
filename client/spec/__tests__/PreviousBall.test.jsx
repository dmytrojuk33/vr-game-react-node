import React from 'react';
import PreviousBall from '../../src/components/PreviousBall';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<PreviousBall {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { number: 4 };
  const wrapper = setup(props);
  const previousBallComponent = findByTestAttr(wrapper, 'component-previous-ball');
  expect(previousBallComponent.length).toBe(1);
});
