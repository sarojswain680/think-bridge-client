import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Card from '../src/Component/CustomModules/Card';

Enzyme.configure({ adapter: new Adapter() })

afterEach(cleanup)


it("renderers card without crashing", () => {

    const data = {
        photo: "https://res.cloudinary.com/dlrmn0ttw/image/upload/v1594216074/sample.jpg",
        name: "FalconSat",
        description: "jngverolgmropghmtrhl[mtrlme",
        price: "220",
    }

    const wrapper = shallow(<Card data={data} />);
    const root = wrapper.find('#text')
    expect(root.first().text()).toEqual('Product Name:- FalconSat')
})

it("matches snapshot", () => {
    const data = {
        photo: "https://res.cloudinary.com/dlrmn0ttw/image/upload/v1594216074/sample.jpg",
        name: "FalconSat",
        description: "jngverolgmropghmtrhl[mtrlme",
        price: "220",
        rocket: { rocket_type: "Merlin A" }
    }
    const tree = renderer.create(<Card data={data}></Card>).toJSON();

    expect(tree).toMatchSnapshot();
})