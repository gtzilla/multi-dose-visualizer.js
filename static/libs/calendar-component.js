'use strict';

import {SingleDayComponent} from './single-day-component.js';

const el = React.createElement.bind(React);
const DATE_FORMAT = 'YYYY-MM-DD';
const localStorage = window.localStorage;

function nextMonth(_date) {
  return moment(_date).add(1, 'month').format(DATE_FORMAT);
}
function backMonth(_date) {
  return moment(_date).subtract(1, 'month').format(DATE_FORMAT);  
}

export class CalendarComponent extends React.PureComponent {
  constructor (props) {
    super(props);
    const storedPatternStr = localStorage.getItem('pattern');
    let pattern = null;
    if(storedPatternStr) {
      pattern = JSON.parse(storedPatternStr);
    }
    const storedDate = localStorage.getItem('start_date');
    this.state = {
      viewBounded:'unbounded',
      pattern:pattern || props.pattern,
      activeDate: props.activeDate,
      patternStartDate: storedDate || props.patternStartDate
    };
  }

  static get defaultProps () {
    const today = moment();
    return {
      activeDate: today,
      pattern: [],
      patternStartDate: moment(today).startOf('month').format(DATE_FORMAT)
    };
  }

  static get propTypes () {
    return {
      pattern: () => {},
      patternStartDate: () => {},
      activeDate: () => {}
    };
  }

  handleStartPickerChange (e) {
    localStorage.setItem('start_date', e.target.value);
    this.setState({
      patternStartDate: e.target.value
    });
  }

  onClickNext(month) {
    return (e)=>{
      this.setState({
        activeDate:moment(month, [DATE_FORMAT])
      });
    }
  }

  onClickBack(month) {
    return (e)=>{
      this.setState({
        activeDate:moment(month, [DATE_FORMAT])
      });
    }
  }

  handleBoundedViewChange(e) {
    console.log("changing", e.target.value);
    this.setState({
      viewBounded:e.target.value
    });
  }
  onChange(e) {
    const splitted = e.target.value.split(',');
    // the 0/1 thing is brittle, but working
    // it handles the sizing
    const zippedIn = splitted.map(item=>{
      return 0;
    });
    zippedIn[0] = 1;
    const pattern = _.zip(splitted, zippedIn);
    this.setState({ pattern });
    localStorage.setItem('pattern', JSON.stringify(pattern))
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
    // this.dosedMonth(this.state.activeDate, this.state.patternStartDate);
    const today = moment();
    let patternCount = -1;
    const startedOn = moment(this.state.patternStartDate, [DATE_FORMAT]);
    const _date = moment(this.state.activeDate);
    const monthStart = moment(_date).startOf('month');
    const weekStart = moment(_date).startOf('month').startOf('week');
    const aCalendarDate = startedOn.isBefore(weekStart) ? startedOn : weekStart;
    const endMonthWeek = moment(_date).endOf('month').endOf('week');
    const accumulator = [];
    
    const daysSince = monthStart.diff(aCalendarDate, 'day');
    // const modulo = daysSince % this.state.pattern.length

    // I want to be able to calculate
    // the pattern position for the first of this month
    console.log("this.state.viewBounded",this.state.viewBounded)
    if(this.state.viewBounded === 'unbounded') {
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
              activeDate:this.state.activeDate,
              calendarDisplay:aCalendarDate.format(DATE_FORMAT),
              patternPosition:patternCount,
              pattern:this.state.pattern
            }));
        }
        aCalendarDate.add(1, 'day');      
      }      
    }

    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'].map(item=>el('li',{},item));
    const headlineMonthFormat = _date.isSame(today, 'year') ? 'MMMM' : 'MMMM YYYY'
    return (
      el(React.Fragment, {},
        el('div', {
          className: 'calendar-component-info-controls'
        },
        el('div', {
          className:'calendar-header-box'
        },
          el('h1', {}, 'Multi Dose'),
          el('label', {
            className:'visualize-input-label'
          },
            'Visualizing',
          el('form', {},
            el('select', {
                value:this.state.viewBounded,
                onChange:this.handleBoundedViewChange.bind(this),
              },
              el('option', {
                value:'unbounded'
              }, 'Unbounded'),
              el('option', {
                value:'bounded'
              }, 'Bounded'))),
          el('input', {
            type:'text',
            onChange:this.onChange.bind(this),
            defaultValue:this.state.pattern.map(item => item[0]).join(', ')
          })),
          el('input', {
            type: 'date',
            onChange: this.handleStartPickerChange.bind(this),
            value: this.state.patternStartDate
          }),
          el('p', {
            className:'data-formatting-instructions-text'
          }, 'Separate with commas')),        
        el('div', {
          className:'calendar-controls-next-back'
        },
          el('p', {}, _date.format(headlineMonthFormat)),
          el('ul', {},
            el('li', {
              className:'calendar-back-month-arrow',
              onClick:this.onClickBack.bind(this)(backMonth(_date))
            }, 'back'),
            el('li', {
              className:'calendar-next-month-arrow',
              onClick:this.onClickNext.bind(this)(nextMonth(_date))
            }, 'next')))),
        el('div', {
          className:'calendar-component-header'
        },
          el('ul', {}, ...dayNames)),
        el('div', {
          className: 'calendar-component-box'
        }, ...accumulator)));
  }
}
