import React from 'react';
import UserButtons from '../../src/components/UserButtons';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<UserButtons {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = {
    drawBall() {},
    verifyTickets() {},
    newGame() {},
    autoMarkTickets() {},
    isJumped: false,
    isWinner: false,
  };
  const wrapper = setup(props);
  const userButtonsComponent = findByTestAttr(wrapper, 'component-user-buttons');
  expect(userButtonsComponent.length).toBe(1);
});
