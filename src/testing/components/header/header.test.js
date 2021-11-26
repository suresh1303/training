import React from 'react';
import Header from '../../../components/header/header';
import Navigation from '../../../components/header/navigation';
import { render, screen, fireEvent } from '@testing-library/react';
import { shallow, mount } from "enzyme";

describe('Header testing - ', () => {
    
    it('Header renders without crashing', () => {
        shallow(<Header />);
    })
    
    it('Header renders logo', () => {
        const wrapper = shallow(<Navigation />);
        const logo = wrapper.find('img[alt="logo"]').length;
        expect(logo).toBeGreaterThan(0);
    })

    it('Header renders navigation', () => {
        const wrapper = shallow(<Navigation />);        
        const navBar = wrapper.find('#basic-navbar-nav').length;
        expect(navBar).toBeGreaterThan(0);
    })
    
})
