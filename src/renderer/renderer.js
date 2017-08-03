import React from 'react';
import { render } from 'react-dom';
import { Window } from 'react-desktop/macOs';

const app = render(
  React.createElement(Window),
  document.getElementById('stage'),
);
