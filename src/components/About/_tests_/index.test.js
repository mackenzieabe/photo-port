import React from 'react';
import { render, cleanup } from '@testing-library/react';
//The render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import '@testing-library/jest-dom/extend-expect';
import About from '..'

afterEach(cleanup);
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
//Then we'll use the describe function to declare the component we're testing, by adding the following code:
describe('About component', () => {
    //first test
    //The first test will be the baseline to verify that the component is rendering. To create that test, add the following code:
    it('renders', () => {
        render(<About />);
    });
    //^^Notice in the preceding code block that we use the it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    //This is where we'll use the render function to render the About component using JSX. Alternatively, test can also be used interchangeably with it to create a test.

    //A snapshot is a serialized version of the DOM node structure, enabled by Jest.
    it('matches snapshot DOM node structure', () => {
        //asFragment function, which returns a snapshot of the About component.
       const { asFragment } = render(<About />);
       expect(asFragment()).toMatchSnapshot();
       //The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function.
    });

    //second test
})