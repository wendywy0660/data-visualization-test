import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../../app/components/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  describe('when there is data', () => {
    it('should Comparison exist', () => {
      expect(wrapper.find('Comparison')).toBeTruthy();
    });

    it('should Allocation exist', () => {
      expect(wrapper.find('Allocation')).toBeTruthy();
    });

    it('should have one heading', () => {
      expect(wrapper.find('#heading').type()).toEqual('h2');
    });
  });

  describe.skip('when there is no data', () => {
    it('should Comparison not exist', () => {
      // write code
      expect(wrapper.find('Comparison')).toBeFalsy();
    });

    it('should Allocation not exist', () => {
      // write code
      expect(wrapper.find('Allocation')).toBeFalsy();
    });
  });
});
