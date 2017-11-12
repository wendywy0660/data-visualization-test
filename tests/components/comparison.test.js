import React from 'react';
import { shallow, configure } from 'enzyme';
import Comparison from '../../app/components/comparison';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Comparison Component', () => {
  let wrapper;

  beforeEach(() => {
    const data = [{ a: 1, b: 2 }, { a: 3, b: 4 }];
    wrapper = shallow(<Comparison data={data} />);
  });

  it('should view control exist', () => {
    expect(wrapper.find('.view-controller')).toBeTruthy();
  });

  it('should BarChart exist', () => {
    expect(wrapper.find('RCBarChart')).toBeTruthy();
  });

  it.skip('should BarChart have right props passed down', () => {
    expect(wrapper.find('RCBarChart')).toHaveProperty('data', []);
  });

  it('should have one heading', () => {
    expect(wrapper.find('.heading').type()).toEqual('h3');
  });
});
