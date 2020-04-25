import React, { createElement } from 'react';
import { create } from 'react-test-renderer';
import Field from '../components/Field';

// Still makes sense to see if this Component actually renderable
describe('[RENDER] Field – Snapshot test', () => {
  test('Matches the snapshot', () => {
    const field = create(<Field />);
    expect(field.toJSON()).toMatchSnapshot();
  });
});
