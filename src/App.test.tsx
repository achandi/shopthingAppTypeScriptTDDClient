import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Layout from './components/UI/Layout';
import SearchPanel from './components/SearchPanel/SearchPanel';

//note I built the test logic for the server first, then developed the server, before moving onto the client.

describe('<App />', () => {
  it('should render a Layout', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it('The Layout within App should render Children  when passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    );
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('The Layout within App should render Children  when passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    );
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('should start with a state to handle the input (empty string), an error (false or error string), and the return string from the server (empty string)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('userInput')).toEqual('');
    expect(wrapper.state('error')).toEqual(false);
    expect(wrapper.state('message')).toEqual('');
  });

  it('it should have a search panel', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchPanel)).toHaveLength(1);
  });

  it('App should handle state change to 10', () => {
    const wrapper = mount(<App />);
    wrapper.setState({ userInput: '10' });
    expect(wrapper.state('userInput')).toEqual('10');
  });
});
