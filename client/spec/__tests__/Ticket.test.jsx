import React from 'react';
import Ticket from '../../src/components/Ticket';
import exampleTickets from '../../../assets/exampleData';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<Ticket {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { ticket: exampleTickets[0], ticketId: 0, markTicket() {} };
  const wrapper = setup(props);
  const ticketDisplayComponent = findByTestAttr(wrapper, 'component-ticket');
  expect(ticketDisplayComponent.length).toBe(1);
});
