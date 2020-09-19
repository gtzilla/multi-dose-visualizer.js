'use strict';

import { CalendarComponent } from '../libs/calendar-component.js';

const router = new Navigo();
const el = React.createElement.bind(React);

function homepage () {
  const pattern = [['88mcg', 1], ['75mcg', 0], ['75mcg', 0], ['75mcg', 0]];
  const patternStartDate = '2020-08-16';
  ReactDOM.render(
    el(React.Fragment, {},
      el(CalendarComponent, {
        activeDate: moment().add(0, 'month'),
        pattern,
        patternStartDate
      })),
    document.getElementById('container'));
}

router.on('/', homepage);
router.resolve(document.location.pathname);
