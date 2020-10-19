'use strict';

import {
  CalendarComponent,
  stringToPattern,
  buildMultidimensional
} from '../libs/calendar-component.js';
import { WebRouter } from '../../node-static/web-router.js/dist/web-router.js';

const router = new WebRouter();
const el = React.createElement.bind(React);
const DATE_FORMAT = 'YYYY-MM-DD';

function homepage () {
  const pattern = buildMultidimensional(stringToPattern('Hug, Hug, Hug, Hug, Kiss'));
  const patternStartDate = '2020-10-17';
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
  it's matched /:pattern when the url is /:pattern/:date
*/
router.on('/:pattern', ({ pattern }) => {
  const splitted = pattern.split(',');
  const prepared = buildMultidimensional(splitted);
  const patternStartDate = moment().format(DATE_FORMAT);
  mainApp(prepared, patternStartDate);
}).on('/:pattern/:date', ({ pattern, date }) => {
  const splitted = pattern.split(',');
  const prepared = buildMultidimensional(splitted);
  const patternStartDate = moment(date, [DATE_FORMAT]).format(DATE_FORMAT);
  mainApp(prepared, patternStartDate);
}).resolve(document.location.pathname);
