const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/auth");
const stationRoutes = require("./routes/stations");

const app = express();
app.use(express.json());

// ✅ Allow only Vercel frontend to access backend
const allowedOrigins = ['https://charging-station-app-jjoi.vercel.app'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
    credentials: true, // only needed if sending cookies or auth headers
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/stations", stationRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
