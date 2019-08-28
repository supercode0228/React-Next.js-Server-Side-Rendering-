import React from 'react';
import ReactDOM from 'react-dom';
import AntCalendar from '../AntCalendar';

it('shows a AntDesign Calendar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AntCalendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
