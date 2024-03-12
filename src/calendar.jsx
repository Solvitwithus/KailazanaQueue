import React, { Component } from 'react';
import './calendar.css'
class Calendar extends Component {
  state = {
    currentDate: new Date(),
  };

  componentDidMount() {
    // Get the current date
    const currentDate = new Date();
    this.setState({ currentDate });
  }

  // Helper function to get the current month
  getCurrentMonth = () => {
    const { currentDate } = this.state;
    return currentDate.toLocaleString('default', { month: 'long' });
  };

  // Helper function to get the days of the current month
  getMonthDays = () => {
    const { currentDate } = this.state;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  };

  render() {
    const { currentDate } = this.state;
    const currentMonth = this.getCurrentMonth();
    const daysInMonth = this.getMonthDays();
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
      <div>
        <h2>{currentMonth}</h2>
        <div className="calendar-grid">
          {/* Render the days of the week */}
          {weekdays.map((day) => (
            <div className="calendar-day" key={day}>
              {day}
            </div>
          ))}

          {/* Render the days of the month */}
          {Array.from({ length: daysInMonth }, (_, index) => {
            const day = index + 1;
            const isCurrentDate =
              day === currentDate.getDate();
            const dayOfWeek = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            ).getDay();

            return (
              <div
                className={`calendar-day ${
                  isCurrentDate ? 'highlight' : ''
                }`}
                key={day}
                style={{ gridColumn: dayOfWeek + 1 }}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Calendar;