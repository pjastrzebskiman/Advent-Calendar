import React from 'react';
import './Calendar.css';

function Calendar({ openedDays, onOpenDay, currentDay, currentOpenedDay }) {
  return (
    <div className="calendar-grid">
      {Array.from({ length: 24 }).map((_, index) => {
        const day = index + 1;
<<<<<<< HEAD
        const isAvailable = day <= currentDay;
=======
        const isAvailable = day <= currentDay; // dla testów mniejsze niż obecna data
>>>>>>> a2f4761c71843b16533907efd0eb25359a60e51d

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
