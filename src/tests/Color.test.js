import React, { createElement } from 'react';
import { create } from 'react-test-renderer';
import Color from '../components/Color';

// Still makes sense to see if this Component actually renderable
describe('[RENDER] Color – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const color = create(<Color />);
    expect(color.toJSON()).toMatchSnapshot();
  });
});
