import React, { createElement } from 'react';
import { create } from 'react-test-renderer';
import Square from '../components/Square';

// Still makes sense to see if this Component actually renderable
describe('[RENDER] Square – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const square = create(<Square />);
    expect(square.toJSON()).toMatchSnapshot();
  });
});
