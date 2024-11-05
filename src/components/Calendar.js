import React from 'react';
import './Calendar.css';

function Calendar({ openedDays, onOpenDay, currentDay, currentOpenedDay }) {
  return (
    <div className="calendar-grid">
      {Array.from({ length: 24 }).map((_, index) => {
        const day = index + 1;
        const isAvailable = day <= currentDay; // dla testów mniejsze niż obecna data

        return (
          <div
            key={index}
            className={`calendar-day ${openedDays[index] ? 'opened' : ''} ${isAvailable ? '' : 'locked'}`}
            onClick={() => {
              if (isAvailable && !openedDays[index]) {
                onOpenDay(index);
              }
            }}
          >
            <span className={`content ${currentOpenedDay === index ? 'surprise' : ''}`}>
              {openedDays[index] ? (currentOpenedDay === index ? 'KOD234' : `🎁`) : day}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Calendar;
