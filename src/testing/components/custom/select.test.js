import React from 'react';
import SelectBox from '../../../utilities/select';
import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount } from "enzyme";


const options = [{ title: 'One', value: 1 }, { title: 'Two', value: 2 }, { title: 'Three', value: 3 },];

it('renders without crashing', () => {
    shallow(<SelectBox options={options} label="Client Name" />);
})
it('Label specified in props is rendered', () => {
    render(<SelectBox options={options} id="selectBox" label="Client Name" />);
    const labelElement = screen.getByLabelText("Client Name");
    expect(labelElement).toBeInTheDocument();
})
it('options specified in props are rendered', () => {
    const selBox = shallow(<SelectBox options={options} id="selectBox" label="Client Name" />);
    const optionElement = selBox.find('option[value=1]').text();
    expect(optionElement).toEqual('One');
})
