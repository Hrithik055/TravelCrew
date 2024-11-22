import React, { useState } from "react";
import InputField from "./InputField";
import "./BookingForm.css"; // Import your CSS file for styling


const BookingForm = () => {
  const [maleSeats, setMaleSeats] = useState("");
  const [femaleSeats, setFemaleSeats] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [driverName, setDriverName] = useState("");

  const perSeatCost = 200; // Example cost per seat

  const randomNames = [
    "Ravi Sharma",
    "Arjun Kapoor",
    "Pooja Verma",
    "Rajesh Gupta",
    "Simran Kaur",
    "Amit Tiwari",
    "Sunita Patel",
    "Deepak Joshi",
  ];

  const generateRandomDetails = () => {
    const randomPhone = `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    const randomVehicle = `DL-${Math.floor(10 + Math.random() * 90)}-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomDriver = randomNames[Math.floor(Math.random() * randomNames.length)];
    setPhoneNumber(randomPhone);
    setVehicleNumber(randomVehicle);
    setDriverName(randomDriver);
  };

  const handleBooking = () => {
    const totalBookedSeats = parseInt(maleSeats || 0) + parseInt(femaleSeats || 0);

    if (!totalSeats || !maleSeats || !femaleSeats || !bookingDate || !fromLocation || !toLocation) {
      alert("Please fill in all fields.");
      return;
    }

    if (totalBookedSeats > parseInt(totalSeats)) {
      alert("The total number of male and female seats exceeds the total seats!");
      return;
    }

    const calculatedAmount = totalBookedSeats * perSeatCost;
    setAmount(calculatedAmount);

    generateRandomDetails();
    setSubmitted(true);
  };

  return (
    <div className="booking-form">
      <h1 className="form-title">Car Booking</h1>
      {!submitted ? (
        <div className="form-container">
          <InputField
            label="Total Seats"
            id="total-seats"
            type="number"
            value={totalSeats}
            onChange={(e) => setTotalSeats(e.target.value)}
            placeholder="Enter total seats"
            min="1"
          />
          <InputField
            label="Male Seats"
            id="male-seats"
            type="number"
            value={maleSeats}
            onChange={(e) => setMaleSeats(e.target.value)}
            placeholder="Enter number of male seats"
            min="0"
          />
          <InputField
            label="Female Seats"
            id="female-seats"
            type="number"
            value={femaleSeats}
            onChange={(e) => setFemaleSeats(e.target.value)}
            placeholder="Enter number of female seats"
            min="0"
          />
          <InputField
            label="Booking Date"
            id="booking-date"
            type="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            placeholder="Select a date"
          />
          <InputField
            label="From Location"
            id="from-location"
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter starting location"
          />
          <InputField
            label="To Location"
            id="to-location"
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Enter destination location"
          />
          <button className="btn-primary" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      ) : (
        <div className="confirmation-container">
          <h2>Booking Confirmed!</h2>
          <p><strong>Total Seats:</strong> {totalSeats}</p>
          <p><strong>Male Seats:</strong> {maleSeats}</p>
          <p><strong>Female Seats:</strong> {femaleSeats}</p>
          <p><strong>Booking Date:</strong> {bookingDate}</p>
          <p><strong>From:</strong> {fromLocation}</p>
          <p><strong>To:</strong> {toLocation}</p>
          <p><strong>Driver Name:</strong> {driverName}</p>
          <p><strong>Phone Number:</strong> {phoneNumber}</p>
          <p><strong>Vehicle Number:</strong> {vehicleNumber}</p>
          <p><strong>Total Amount:</strong> ₹{amount}</p>
          <button className="btn-secondary" onClick={() => setSubmitted(false)}>
            Edit Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
