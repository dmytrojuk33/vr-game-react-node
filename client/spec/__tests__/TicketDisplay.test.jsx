import React from 'react';
import TicketDisplay from '../../src/components/TicketDisplay';
import exampleTickets from '../../../assets/exampleData';

const setup = (props = {}, state = null) => {
  // eslint-disable-next-line no-undef
  const wrapper = shallow(<TicketDisplay {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('render without error', () => {
  const props = { tickets: exampleTickets, markTicket() {} };
  const wrapper = setup(props);
  const ticketDisplayComponent = findByTestAttr(wrapper, 'component-ticket-display');
  expect(ticketDisplayComponent.length).toBe(1);
});
