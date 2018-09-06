import React from 'react';
import LastBall from '../../src/components/LastBall';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<LastBall {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { number: 4 };
  const wrapper = setup(props);
  const LastBallComponent = findByTestAttr(wrapper, 'component-last-ball');
  expect(LastBallComponent.length).toBe(1);
});
