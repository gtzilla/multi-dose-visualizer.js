'use strict';

import { SingleDayComponent } from './single-day-component.js';

const el = React.createElement.bind(React);
const DATE_FORMAT = 'YYYY-MM-DD';
const localStorage = window.localStorage;

function nextMonth (_date) {
  return moment(_date).add(1, 'month').format(DATE_FORMAT);
}
function backMonth (_date) {
  return moment(_date).subtract(1, 'month').format(DATE_FORMAT);
}

export function selectIndexUnique (splitted) {
  const obj = {};
  splitted.map(item => item.trim()).filter(item => item).forEach(item => {
    if (_.has(obj, item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });
  const paired = _.chain(obj).pairs().sortBy(item => {
    return _.last(item);
  }).value();
  const key = _.chain(paired).first().first().value();
  return _.findIndex(splitted, item => {
    return item.trim() === key;
  });
}

export function buildMultidimensional (splitted) {
  const idx = selectIndexUnique(splitted);
  const zippedIn = splitted.map(item => {
    return 0;
  });
  zippedIn[idx] = 1;
  const pattern = _.zip(splitted, zippedIn);
  return pattern;
}

export class CalendarComponent extends React.PureComponent {
  constructor (props) {
    super(props);
    const storedPatternStr = localStorage.getItem('pattern');
    let pattern = null;
    try {
      if (storedPatternStr) {
        pattern = JSON.parse(storedPatternStr);
      }
    } catch (err) {
      console.error('ERROR', err);
    }
    const storedDate = localStorage.getItem('start_date');
    this.state = {
      pattern: this.props.pattern ? this.props.pattern : pattern,
      activeDate: this.props.activeDate,
      patternStartDate: this.props.patternStartDate ? this.props.patternStartDate : storedDate
    };
  }

  static get defaultProps () {
    const today = moment();
    return {
      activeDate: today,
      pattern: null,
      router: null,
      patternStartDate: null
    };
  }

  static get propTypes () {
    return {
      pattern: () => {},
      router: () => {},
      patternStartDate: () => {},
      activeDate: () => {}
    };
  }

  handleStartPickerChange (e) {
    localStorage.setItem('start_date', e.target.value);
    this.setState({
      patternStartDate: e.target.value
    }, () => {
      this.navigate(this.patternInput.value.split(',').map(item => item.trim()));
    });
  }

  onClickNext (month) {
    return (e) => {
      this.setState({
        activeDate: moment(month, [DATE_FORMAT])
      });
    };
  }

  onClickBack (month) {
    return (e) => {
      this.setState({
        activeDate: moment(month, [DATE_FORMAT])
      });
    };
  }

  onChange (e) {
    const splitted = e.target.value.split(',').map(item => item.trim());
    const pattern = buildMultidimensional(splitted);
    this.setState({ pattern });
    localStorage.setItem('pattern', JSON.stringify(pattern));
    if (e.target.value.length) {
      this.navigate(splitted);
    }
  }

  navigate (pattern = null) {
    if (this.props.router && pattern) {
      this.props.router.navigate('/' + pattern.join(',') + '/' + this.state.patternStartDate);
    }
  }

  // dosedMonth(currentDate, startDate) {
  //   const _date = moment(currentDate, [DATE_FORMAT]);
  //   const startedOn = moment(startDate, [DATE_FORMAT]);
  //   const startOfMonth = moment(_date).startOf('month');
  //   const started = startedOn.isAfter(startOfMonth) ? startedOn : startOfMonth;
  //   const endOfMonth = moment(_date).endOf('month');
  //   const dayDiff = endOfMonth.diff(started, 'day');
  //   const accumulate = [];
  //   for(let i=0; i<dayDiff+1; i++) {
  //     const active = moment(started).add(i, 'day');
  //     accumulate.push(active.format(DATE_FORMAT))
  //   }
  //   console.log("accumulate", accumulate)
  //   return accumulate;
  // }
  render () {
    if (!this.state.pattern || !this.state.patternStartDate) return el('div', {}, 'loading');
    const today = moment();
    let patternCount = -1;
    const startedOn = moment(this.state.patternStartDate, [DATE_FORMAT]);
    const _date = moment(this.state.activeDate);
    const weekStart = moment(_date).startOf('month').startOf('week');
    const aCalendarDate = startedOn.isBefore(weekStart) ? startedOn : weekStart;
    const endMonthWeek = moment(_date).endOf('month').endOf('week');
    const accumulator = [];
    // I want to be able to calculate
    // the pattern position for the first of this month
    while (aCalendarDate.isBefore(endMonthWeek)) {
      if (aCalendarDate.isSameOrAfter(startedOn)) {
        patternCount += 1;
        if (patternCount >= this.state.pattern.length) {
          patternCount = 0;
        }
      }
      if (aCalendarDate.isSameOrAfter(weekStart)) {
        accumulator.push(
          el(SingleDayComponent, {
            today,
            activeDate: this.state.activeDate,
            calendarDisplay: aCalendarDate.format(DATE_FORMAT),
            patternPosition: patternCount,
            pattern: this.state.pattern
          }));
      }
      aCalendarDate.add(1, 'day');
    }
    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'].map(item => el('li', {}, item));
    const headlineMonthFormat = _date.isSame(today, 'year') ? 'MMMM' : 'MMMM YYYY';
    return (
      el(React.Fragment, {},
        el('div', {
          className: 'calendar-component-info-controls'
        },
        el('div', {
          className: 'calendar-header-box'
        },
        el('h1', {}, 'Multi Dose'),
        el('label', {
          className: 'visualize-input-label'
        },
        'Visualizing',
        el('form', {
          onSubmit: (evt) => {
            evt.preventDefault();
            this.navigate();
          }
        },
        el('input', {
          type: 'text',
          ref: el => { this.patternInput = el; },
          onChange: this.onChange.bind(this),
          defaultValue: this.state.pattern.map(item => item[0]).join(', ')
        }))),
        el('input', {
          type: 'date',
          onChange: this.handleStartPickerChange.bind(this),
          defaultValue: this.state.patternStartDate
        }),
        el('p', {
          className: 'data-formatting-instructions-text'
        }, 'Separate with commas')),
        el('div', {
          className: 'calendar-controls-next-back'
        },
        el('p', {}, _date.format(headlineMonthFormat)),
        el('ul', {},
          el('li', {
            className: 'calendar-back-month-arrow',
            onClick: this.onClickBack.bind(this)(backMonth(_date))
          }, 'back'),
          el('li', {
            className: 'calendar-next-month-arrow',
            onClick: this.onClickNext.bind(this)(nextMonth(_date))
          }, 'next')))),
        el('div', {
          className: 'calendar-component-header'
        },
        el('ul', {}, ...dayNames)),
        el('div', {
          className: 'calendar-component-box'
        }, ...accumulator)));
  }
}
