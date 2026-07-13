import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    title: "Tadiandamol Peak",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
  },
  {
    id: 2,
    title: "Kudremukh Trek",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
  },
  {
    id: 3,
    title: "Skandagiri Sunrise",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 4,
    title: "Brahmagiri",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
  },
  {
    id: 5,
    title: "Camping",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 6,
    title: "Waterfalls",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
  },
];

export default function Gallery() {
  return (
    <div className="page">
      <section className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="section-title">Adventure Gallery</h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "40px",
              color: "#666",
            }}
          >
            Moments captured from our unforgettable trekking adventures across
            Karnataka.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: "20px",
            }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.id}
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,.15)",
                }}
              >
                <img
                  src={img.image}
                  alt={img.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    padding: "15px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}