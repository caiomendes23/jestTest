// __tests__/Intro-test.js
import React from 'react';
import Intro from '../src/Intro';
import {render} from '@testing-library/react-native';

test('renders correctly', async () => {
  //   const tree = renderer.create(<Intro />).toJSON();
  //   expect(tree).toMatchSnapshot();

  const {getByTestId} = render(<Intro />);
  const appHeader = getByTestId('test-welcomes');
  await expect(appHeader).toBeTruthy();
});
