import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Burger from './Burger';

describe('Component Burger', () => {
  test('render Burger', () => {
    render(<Burger onClick={() => {}} activeMobileMenu={false} />);
  });

  test('snapShot burger activeMobileMenu:false', () => {
    let burger = render(<Burger onClick={() => {}} activeMobileMenu={false} />);
    expect(burger).toMatchSnapshot();
    burger = render(<Burger onClick={() => {}} activeMobileMenu={true} />);
    expect(burger).toMatchSnapshot();
  });
});
