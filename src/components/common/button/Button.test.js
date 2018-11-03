import React from 'react';
import { mount } from 'enzyme';
import * as Button from './Button';

const mockFn = jest.fn();

const setup = propOverrides => {
  const props = Object.assign(
    {
      text: 'This is my label',
      onClick: mockFn,
    },
    propOverrides
  );

  const wrapper = mount(<Button.Add {...props} />);

  return {
    props,
    wrapper,
  };
};

describe('<Button />', () => {
  it('matches snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call function from onClick callback when clicked', () => {
    const { wrapper } = setup();
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have the correct label/text', () => {
    const { wrapper } = setup();
    expect(wrapper.find('BaseButton').text()).toEqual('This is my label');
  });
});
