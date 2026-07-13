import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const { state } = useLocation();
  const trek = state?.trek;

  const selectedTrek = trek || {
  name: "Select a Trek",
  location: "Please choose a trek first",
  difficulty: "-",
  duration: "-",
  rating: "-",
  price: 0,
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
};

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    emergency: "",
    people: 1,
    date: "",
    message: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "people"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const total =
    (selectedTrek.price || 0) * (Number(form.people) || 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  if (booked) {
    return (
      <div
        style={{
          maxWidth: "700px",
          margin: "80px auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,.1)",
        }}
      >
        <h1 style={{ color: "#22c55e" }}>
          ✅ Booking Confirmed
        </h1>

        <p style={{ fontSize: "18px" }}>
          Thank you <b>{form.name}</b>!
        </p>

        <p>
          Your booking request for
          <b> {trek?.name}</b> has been received.
        </p>

        <h2 style={{ marginTop: "25px" }}>
          Booking ID
        </h2>

        <h1 style={{ color: "#22c55e" }}>
          TV{Math.floor(Math.random() * 100000)}
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(350px,1fr))",
        gap: "30px",
        padding: "20px",
      }}
    >
      {/* LEFT CARD */}

      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <img
          src={selectedTrek.image}
          alt={selectedTrek.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "25px" }}>
          <h2>{trek?.name}</h2>

          <p>📍 {selectedTrek.location}</p>

          <p>🥾 {selectedTrek.difficulty}</p>

          <p>⏳ {selectedTrek.duration}</p>

          <p>
            ⭐ {selectedTrek.rating}
          </p>

          <h2
            style={{
              color: "#22c55e",
            }}
          >
            ₹{selectedTrek.price}/Person
          </h2>

          <hr
            style={{
              margin: "20px 0",
            }}
          />

          <h3>Booking Summary</h3>

          <p>
            People : <b>{form.people}</b>
          </p>

          <p>
            Total :
            <b
              style={{
                color: "#22c55e",
              }}
            >
              ₹{total}
            </b>
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,.1)",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
          }}
        >
          Book Your Trek
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="emergency"
            placeholder="Emergency Contact Number"
            value={form.emergency}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="people"
            min="1"
            placeholder="Number of People"
            value={form.people}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Special Requests (Optional)"
            rows="4"
            value={form.message}
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "#22c55e",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Confirm Booking • ₹{total}
          </button>

        </form>

      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "15px",
  boxSizing: "border-box",
};