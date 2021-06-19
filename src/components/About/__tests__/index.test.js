import React from 'react';
import { render, cleanup } from '@testing-library/react';
//jest dom offers access to customer matchers that are used to test  DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });
    //Second Test
    it('matches snapshot DOM node structure', () => {
        //render about 
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})

