import React, { useState } from 'react';
import './Calendar.css';

function Calendar({ openedDays, onOpenDay, currentDay, currentOpenedDay }) {
  const [showModal, setShowModal] = useState(false); // Stan modala

  const handleClickDay = (index, isAvailable) => {
    if (isAvailable && !openedDays[index]) {
      onOpenDay(index);
    } else if (!isAvailable) {
      setShowModal(true); // Pokazujemy modal, jeśli dzień jest zablokowany
    }
  };

  return (
    <div>
      <div className="calendar-grid">
        {Array.from({ length: 24 }).map((_, index) => {
          const day = index + 1;
          const isAvailable = day <= currentDay;

          return (
            <div
              key={index}
              className={`calendar-day ${openedDays[index] ? 'opened' : ''} ${isAvailable ? '' : 'locked'}`}
              onClick={() => handleClickDay(index, isAvailable)}
            >
              <span className={`content ${currentOpenedDay === index ? 'surprise' : ''}`}>
                {openedDays[index] ? (currentOpenedDay === index ? 'KOD234' : `🎁`) : day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>Ten dzień jest jeszcze zablokowany! Spróbuj ponownie później.</p>
            <button onClick={() => setShowModal(false)}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
