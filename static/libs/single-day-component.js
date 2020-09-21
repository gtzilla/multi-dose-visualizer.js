'use strict';

const el = React.createElement.bind(React);
const DATE_FORMAT = 'YYYY-MM-DD';

export class SingleDayComponent extends React.PureComponent {
  static get propTypes() {
    return {
      today:()=>{},
      pattern:()=>{},
      activeDate:()=>{},
      patternPosition:()=>{},
      calendarDisplay:()=>{}
    }
  }
  static get defaultProps() {
    return {
      today:moment(),
      pattern:[],
      patternPosition:0,
      activeDate:moment()
    }
  }
  render() {
    let displayable = [];
    const attrs = {
      className: 'calendar-date-box'
    };
    const dayAttrs = { 
      className: 'standard-dosing-day' 
    };    
    const today = this.props.today;
    const patternPos = this.props.patternPosition;
    const pattern = this.props.pattern;
    const activeDate = moment(this.props.activeDate, [DATE_FORMAT]);
    // react REALLY REALLY dislikes passing a raw moment obj through.
    const calendarDisplay = moment(this.props.calendarDisplay, [DATE_FORMAT]);
    const strDate = calendarDisplay.format('DD');
    const isToday = calendarDisplay.isSame(today, 'day') ? ' current-day' : '';
    if (!activeDate.isSame(calendarDisplay, 'month')) {
      attrs.className = 'edge-day-single-box';
    }
    if (patternPos >= 0) {
      displayable = pattern[patternPos];
      if (displayable[1]) {
        dayAttrs.className = 'variant-dosing-day';
      }
    }    
    return (
      el('div', {
          className: 'calendar-box-single-date-box' + isToday
        },
        el('span', attrs, strDate),
        el('span', dayAttrs, displayable[0]))      
      )    
  }
}