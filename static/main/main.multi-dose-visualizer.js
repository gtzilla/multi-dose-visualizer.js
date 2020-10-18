'use strict';

import {
  CalendarComponent,
  buildMultidimensional
} from '../libs/calendar-component.js';
import { WebRouter } from '../../node-static/web-router.js/dist/web-router.js';

const router = new WebRouter();
const el = React.createElement.bind(React);
const DATE_FORMAT = 'YYYY-MM-DD';

function homepage () {
  const pattern = [['88mcg', 1], ['75mcg', 0], ['75mcg', 0], ['75mcg', 0]];
  const patternStartDate = '2020-08-16';
  mainApp(pattern, patternStartDate);
}

function mainApp (pattern, patternStartDate) {
  ReactDOM.render(
    el(React.Fragment, {},
      el(CalendarComponent, {
        activeDate: moment().add(0, 'month'),
        pattern,
        router,
        patternStartDate
      })),
    document.getElementById('container'));
}

router.on('/', homepage);
/**
  Router Bug

  it's matched :pattern when the url is :pattern/:date
*/

router.on('/:pattern', ({ pattern }) => {
  const splitted = pattern.split(',');
  const prepared = buildMultidimensional(splitted);
  console.log('prepared', prepared);
  const patternStartDate = moment().format(DATE_FORMAT);
  mainApp(prepared, patternStartDate);
}).on('/:pattern/:date', ({ pattern, date }) => {
// }).on('/:pattern/:date', ({pattern, date})=>{
  const splitted = pattern.split(',');
  const prepared = buildMultidimensional(splitted);
  const patternStartDate = moment(date, [DATE_FORMAT]).format(DATE_FORMAT);
  console.log('patternStartDate', patternStartDate);
  mainApp(prepared, patternStartDate);
});
router.resolve(document.location.pathname);
