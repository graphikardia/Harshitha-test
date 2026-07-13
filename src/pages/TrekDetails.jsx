import { Link, useLocation } from "react-router-dom";
import { MapPin, Star, Clock, Mountain, Footprints, Users } from "lucide-react";
import { useEffect } from "react";

export default function TrekDetails() {
  const { state } = useLocation();
  const trek = state?.trek;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trek) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <h1>Trek Not Found</h1>

        <Link
          to="/treks"
          style={{
            color: "#16A34A",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          ← Back to Treks
        </Link>
      </div>
    );
  }

  return (
    <div>

      {/* HERO IMAGE */}

      <div
        style={{
          position: "relative",
          height: "500px",
          overflow: "hidden"
        }}
      >

        <img
          src={trek.image}
          alt={trek.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))"
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "50px",
            left: "70px",
            color: "white"
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "15px"
            }}
          >
            {trek.name}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "25px",
              flexWrap: "wrap",
              fontSize: "18px"
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Star fill="#FFD700" color="#FFD700" size={18} />
              {trek.rating}
            </span>

            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <MapPin size={18} />
              {trek.location}
            </span>

            <span
              style={{
                background: "#16A34A",
                padding: "6px 18px",
                borderRadius: "25px"
              }}
            >
              {trek.difficulty}
            </span>

            <span
              style={{
                fontWeight: "bold",
                fontSize: "22px"
              }}
            >
              ₹{trek.price}/Person
            </span>
          </div>
        </div>

      </div>
            <div
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 20px"
        }}
      >

        {/* INFORMATION CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginBottom: "50px"
          }}
        >

          <div className="info-card">
            <Clock size={30} color="#16A34A" />
            <h3>Duration</h3>
            <p>{trek.duration}</p>
          </div>

          <div className="info-card">
            <Footprints size={30} color="#16A34A" />
            <h3>Distance</h3>
            <p>{trek.distance}</p>
          </div>

          <div className="info-card">
            <Mountain size={30} color="#16A34A" />
            <h3>Altitude</h3>
            <p>{trek.altitude}</p>
          </div>

          <div className="info-card">
            <Users size={30} color="#16A34A" />
            <h3>Slots Left</h3>
            <p>{trek.slots}</p>
          </div>

        </div>


        {/* ABOUT TREK */}

        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              color: "#0F172A"
            }}
          >
            About This Trek
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              color: "#555",
              fontSize: "17px"
            }}
          >
            {trek.name} is one of Karnataka's most beautiful trekking
            destinations. Experience lush green forests, breathtaking sunrise
            views, rocky mountain trails and unforgettable landscapes. This
            trek is suitable for adventure lovers looking to explore nature
            while enjoying a safe and guided trekking experience.
          </p>
        </div>


        {/* HIGHLIGHTS */}

        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "25px",
              color: "#0F172A"
            }}
          >
            Trek Highlights
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px"
            }}
          >
            {trek.highlights.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#E8F5E9",
                  color: "#16A34A",
                  padding: "12px 20px",
                  borderRadius: "30px",
                  fontWeight: "600"
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
                {/* THINGS TO CARRY */}

        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "25px",
              color: "#0F172A"
            }}
          >
            Things To Carry
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px"
            }}
          >
            {[
              "🎒 Backpack",
              "🥾 Trek Shoes",
              "💧 Water Bottle",
              "🧥 Jacket",
              "🕶 Sunglasses",
              "🧢 Cap",
              "🔦 Torch",
              "🍫 Energy Snacks"
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  fontWeight: "600"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>


        {/* ITINERARY */}

        <div style={{ marginBottom: "70px" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "30px",
              color: "#0F172A"
            }}
          >
            Trek Itinerary
          </h2>

          <div
            style={{
              borderLeft: "4px solid #16A34A",
              marginLeft: "20px",
              paddingLeft: "30px"
            }}
          >

            {[
              "🚌 11:00 PM - Departure from Bangalore",
              "🌄 05:30 AM - Reach Base Camp",
              "🥾 06:00 AM - Start Trek",
              "🌅 07:15 AM - Sunrise Point",
              "📸 08:00 AM - Photography & Relax",
              "🍳 09:00 AM - Breakfast",
              "🏠 Return Journey"
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "30px",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-40px",
                    top: "5px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#16A34A"
                  }}
                />

                <p
                  style={{
                    fontSize: "17px",
                    color: "#444",
                    fontWeight: "500"
                  }}
                >
                  {step}
                </p>

              </div>
            ))}

          </div>
        </div>
                {/* INCLUSIONS & EXCLUSIONS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
            marginBottom: "60px"
          }}
        >

          <div
            style={{
              background: "#F0FDF4",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h2 style={{ color: "#16A34A", marginBottom: "20px" }}>
              ✅ Inclusions
            </h2>

            <ul style={{ lineHeight: "2" }}>
              <li>Transportation</li>
              <li>Experienced Trek Leader</li>
              <li>Forest Entry Permit</li>
              <li>Breakfast</li>
              <li>Basic First Aid</li>
            </ul>
          </div>

          <div
            style={{
              background: "#FEF2F2",
              padding: "30px",
              borderRadius: "20px"
            }}
          >
            <h2 style={{ color: "#DC2626", marginBottom: "20px" }}>
              ❌ Exclusions
            </h2>

            <ul style={{ lineHeight: "2" }}>
              <li>Lunch & Dinner</li>
              <li>Personal Expenses</li>
              <li>Travel Insurance</li>
              <li>Anything not mentioned above</li>
            </ul>
          </div>

        </div>


        {/* BOOK NOW */}

        <div
          style={{
            background: "#16A34A",
            color: "white",
            borderRadius: "25px",
            padding: "40px",
            textAlign: "center",
            marginBottom: "80px"
          }}
        >

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "15px"
            }}
          >
            Ready For Your Adventure?
          </h2>

          <p
            style={{
              marginBottom: "30px",
              fontSize: "18px"
            }}
          >
            Reserve your slot today and experience one of Karnataka's most beautiful treks.
          </p>

          <Link
            to="/booking"
            state={{ trek }}
            style={{
              display: "inline-block",
              background: "white",
              color: "#16A34A",
              padding: "16px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "18px"
            }}
          >
            Book This Trek →
          </Link>

        </div>

      </div>

    </div>
  );
}