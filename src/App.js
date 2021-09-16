
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {


  const [bookingList, changeBookingList] = useState([]);
  const [color, setColor] = useState('blue');

  const newBooking = (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const listing = document.getElementById('listing').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const currentDate = document.getElementById('currentDate').value;
    let status = ''
    if (checkin - currentDate > 3) {
      status = 'CONFIRMED';
      setColor('green');
    } else if (3 >= checkin - currentDate && checkin - currentDate > 0) {
      status = 'COMING';
      setColor('orange');
    } else if (currentDate >= checkin && currentDate <= checkout) {
      status = 'CURRENT';
      setColor('pink');
    } else if (currentDate > checkout) {
      status = 'COMPLETED';
      setColor('grey');
    }

    changeBookingList([{
      id: id,
      listing: listing,
      checkin: checkin,
      checkout: checkout,
      status: status,
    }])


  }

  const appStyle = {
    backgroundColor : color
  }

  return (
    <div className="App">
      <p>Current date</p>
      <input id='currentDate'></input>
      <p>ID</p>
      <input id='id'></input>
      <p>Listing</p>
      <input id='listing'></input>
      <p>Checkin</p>
      <input id='checkin'></input>
      <p>Checkout</p>
      <input id='checkout'></input>

      <button onClick={newBooking}>Book</button>

      <div>
        {bookingList.map((item) => 
          <div className='item' key={item.id}>
            <p>{item.id}</p>
            <p>{item.listing}</p>
            <p>{item.checkin}</p>
            <p>{item.checkout}</p>
            <p style={appStyle} >{item.status}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
