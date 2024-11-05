import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  const [openedDays, setOpenedDays] = useState(() => {
    const savedDays = localStorage.getItem('openedDays');
    return savedDays ? JSON.parse(savedDays) : Array(24).fill(false);
  });
  const [currentOpenedDay, setCurrentOpenedDay] = useState(null); // Stan bieżącego otwartego dnia

  const currentDay = new Date().getDate(); // Bieżący dzień miesiąca

  useEffect(() => {
    localStorage.setItem('openedDays', JSON.stringify(openedDays));
  }, [openedDays]);

  const handleOpenDay = (index) => {
    const updatedDays = [...openedDays];
    updatedDays[index] = true;
    setOpenedDays(updatedDays);
    setCurrentOpenedDay(index); // Ustawienie bieżącego dnia
  };

  return (
    <div className="App">
       <div className="header-text">
      <h1>Ho Ho Ho Czas zacząć świąteczne odliczanie</h1>
      <h2>Otwórz razem z nami swój kalendarz adwentwoy i zgarnij kody rabatowe</h2>
      </div>
      <Calendar
        openedDays={openedDays}
        onOpenDay={handleOpenDay}
        currentDay={currentDay}
        currentOpenedDay={currentOpenedDay} // Przekazujemy bieżący dzień do komponentu Calendar
      />
    </div>
  );
}

export default App;
