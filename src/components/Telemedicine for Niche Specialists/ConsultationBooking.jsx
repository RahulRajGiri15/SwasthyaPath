
import React, { useState } from "react";

const ConsultationBooking = ({ specialist }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", {
      specialist,
      selectedDate,
      selectedTime,
      patientName,
      patientEmail,
    });
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed</h2>
        <p>
          Your consultation with Dr. {specialist.name} has been booked for{" "}
          {selectedDate} at {selectedTime}.
        </p>
        <p className="mt-4">
          We've sent a confirmation email to {patientEmail}.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">
        Book a Consultation with Dr. {specialist.name}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="block mb-1">
            Time
          </label>
          <input
            type="time"
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={patientEmail}
            onChange={(e) => setPatientEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Consultation
        </button>
      </form>
    </div>
  );
};

export default ConsultationBooking;
