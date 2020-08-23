import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from '../src/Component/CustomModules/header';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)


it("renderers card without crashing", () => {

    const wrapper = shallow(<Header siteTitle="SpaceX" />);
    const root = wrapper.find('#title')
    expect(root.first().text()).toEqual('SpaceX')
})
