import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getFirstDayOfWeek, solarMonthDays, isSameDate } from '../utils';

function initSameDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export default class PickerDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null, panelDate: props.panelDate };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.panelDate !== this.props.panelDate) {
      this.setState({ panelDate: nextProps.panelDate });
    }
  }
  handleClick(selectedDate) {
    const { date } = this.props;
    selectedDate = initSameDate(selectedDate);
    if (date && isSameDate(selectedDate, initSameDate(date))) {
      this.setState({ selected: selectedDate });
      selectedDate = null;
    }
    this.setState({ panelDate: selectedDate });
    this.props.onChange(selectedDate);
  }
  renderDay(num, row) {
    const { date: selectedDate, disabledDate } = this.props;
    const today = initSameDate(this.props.today);
    const date = initSameDate(this.state.panelDate);
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfWeek = getFirstDayOfWeek(year, month + 1);
    let day = row * 7 + num - firstDayOfWeek + 1;
    const cls = { end: num === 0 || num === 6 };
    // Prev Month
    const preDate = new Date(new Date(date).setMonth(month - 1));
    // Next Month
    const nextDate = new Date(new Date(date).setMonth(month + 1));
    const prevDays = solarMonthDays(preDate.getFullYear(), preDate.getMonth() + 1);
    const days = solarMonthDays(year, month + 1);
    let cellDate = null;
    if (day <= 0) {
      // Prev Month
      day = prevDays + day;
      cls.prev = true;
      cellDate = new Date(preDate).setDate(day);
    } else if (day > days) {
      // Next Month
      day -= days;
      cls.next = true;
      cellDate = new Date(nextDate).setDate(day);
    } else {
      cellDate = new Date(this.state.panelDate).setDate(day);
    }
    cellDate = initSameDate(new Date(cellDate));
    if (isSameDate(cellDate, today)) {
      cls.today = true;
    }
    if (selectedDate && isSameDate(cellDate, initSameDate(selectedDate))) {
      cls.selected = true;
    }
    const props = {
      key: num,
      onClick: this.handleClick.bind(this, cellDate),
    };
    if (disabledDate(cellDate)) {
      cls.disabled = true;
      delete props.onClick;
    }
    return (
      <div {...props} className={classnames(cls)}>
        <div>{day}</div>
      </div>
    );
  }
  renderWeek(num) {
    const { prefixCls } = this.props;
    return (
      <div key={num} className={`${prefixCls}-week`}>
        {[...Array(7)].map((_, idx) => this.renderDay(idx, num))}
      </div>
    );
  }
  render() {
    const { prefixCls, className, weekday, weekTitle, date, today, panelDate, disabledDate, ...other } = this.props;
    return (
      <div {...other} className={classnames(`${prefixCls}-body`, className)}>
        <div className={`${prefixCls}-weekday`}>
          {weekday.map((week, idx) => {
            return (
              <div key={idx} className={classnames({ end: idx === 0 || idx === 6 })} title={weekTitle[idx]}>{week}</div>
            );
          })}
        </div>
        <div className={`${prefixCls}-body`}>
          {[...Array(6)].map((_, idx) => this.renderWeek(idx))}
        </div>
      </div>
    );
  }
}

PickerDay.propTypes = {
  prefixCls: PropTypes.string,
  onChange: PropTypes.func,
};

PickerDay.defaultProps = {
  prefixCls: 'w-datepicker',
};