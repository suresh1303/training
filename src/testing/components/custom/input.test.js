import React from 'react';
import InputBox from '../../../utilities/input';
import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount } from "enzyme";

it('Renders without crashing',()=>{
    shallow(<InputBox label="Client Name" type="password" id="password" />);
})
it('Label specified in props is rendered',()=>{
    render(<InputBox label="Client Name" type="password" id="password" />);
    const labelElement = screen.getByLabelText("Client Name");
    expect(labelElement).toBeInTheDocument();
})
it('Attributes specified in props are rendered',()=>{
    render(<InputBox label="Client Name" type="password" id="password" />);
    const ElementID = document.querySelector('#password');
    expect(ElementID).toBeInTheDocument();
})