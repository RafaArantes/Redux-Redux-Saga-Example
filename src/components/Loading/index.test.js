import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Loading} from './index';
import {connect} from 'react-redux'


configure({ adapter: new Adapter() });

describe(`<Loading>`, () =>{
  it('renders three <Loading /> components', () => {
    const loading = shallow(<Loading loading={true}/>);
    expect(loading).toMatchSnapshot()
  });
})
