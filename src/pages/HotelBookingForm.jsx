import React, { useState } from "react";
import InputField from "./InputField";
import "./HotelBookingForm.css"; // Import CSS for styling

const HotelBookingForm = () => {
  const [totalRooms, setTotalRooms] = useState("");
  const [maleGuests, setMaleGuests] = useState("");
  const [femaleGuests, setFemaleGuests] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("");
  const [location, setLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [hotelName, setHotelName] = useState("");

  const perRoomCost = 1500; // Example cost per room per night

  const randomHotels = [
    "Ocean Breeze Resort",
    "Mountain View Hotel",
    "Sunrise Stay",
    "Urban Retreat",
    "Royal Palm Suites",
    "Comfort Inn",
    "Grand Vista Lodge",
  ];

  const calculateAmount = () => {
    const nights =
      (new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) /
      (1000 * 3600 * 24);
    return nights * totalRooms * perRoomCost;
  };

  const generateRandomDetails = () => {
    const randomConfirmation = `HTL${Math.floor(100000 + Math.random() * 900000)}`;
    const randomHotel = randomHotels[Math.floor(Math.random() * randomHotels.length)];
    setConfirmationNumber(randomConfirmation);
    setHotelName(randomHotel);
  };

  const handleBooking = () => {
    const totalGuests = parseInt(maleGuests || 0) + parseInt(femaleGuests || 0);

    if (
      !totalRooms ||
      !maleGuests ||
      !femaleGuests ||
      !checkInDate ||
      !checkOutDate ||
      !roomType ||
      !location
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (totalGuests > totalRooms * 2) {
      alert("Each room can accommodate a maximum of 2 guests!");
      return;
    }

    const calculatedAmount = calculateAmount();
    setAmount(calculatedAmount);

    generateRandomDetails();
    setSubmitted(true);
  };

  return (
    <div className="hotel-booking-form">
      <h1 className="form-title">Hotel Booking</h1>
      {!submitted ? (
        <div className="form-container">
          <InputField
            label="Total Rooms"
            id="total-rooms"
            type="number"
            value={totalRooms}
            onChange={(e) => setTotalRooms(e.target.value)}
            placeholder="Enter number of rooms"
            min="1"
          />
          <InputField
            label="Male Guests"
            id="male-guests"
            type="number"
            value={maleGuests}
            onChange={(e) => setMaleGuests(e.target.value)}
            placeholder="Enter number of male guests"
            min="0"
          />
          <InputField
            label="Female Guests"
            id="female-guests"
            type="number"
            value={femaleGuests}
            onChange={(e) => setFemaleGuests(e.target.value)}
            placeholder="Enter number of female guests"
            min="0"
          />
          <InputField
            label="Check-in Date"
            id="check-in-date"
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            placeholder="Select a check-in date"
          />
          <InputField
            label="Check-out Date"
            id="check-out-date"
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            placeholder="Select a check-out date"
          />
          <InputField
            label="Room Type"
            id="room-type"
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            placeholder="Enter room type (e.g., Deluxe, Standard)"
          />
          <InputField
            label="Location"
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter hotel location"
          />
          <button className="btn-primary" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      ) : (
        <div className="confirmation-container">
          <h2>Booking Confirmed!</h2>
          <p><strong>Total Rooms:</strong> {totalRooms}</p>
          <p><strong>Male Guests:</strong> {maleGuests}</p>
          <p><strong>Female Guests:</strong> {femaleGuests}</p>
          <p><strong>Check-in Date:</strong> {checkInDate}</p>
          <p><strong>Check-out Date:</strong> {checkOutDate}</p>
          <p><strong>Room Type:</strong> {roomType}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Hotel Name:</strong> {hotelName}</p>
          <p><strong>Confirmation Number:</strong> {confirmationNumber}</p>
          <p><strong>Total Amount:</strong> ₹{amount}</p>
          <button className="btn-secondary" onClick={() => setSubmitted(false)}>
            Edit Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelBookingForm;
