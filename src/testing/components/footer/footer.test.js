import React from 'react';
import Footer from '../../../components/footer/footer';
import { shallow, mount } from "enzyme";

describe('Footer testing - ', () => {
    it('Footer renders without crashing', () => {
        shallow(<Footer />);
    })
})
