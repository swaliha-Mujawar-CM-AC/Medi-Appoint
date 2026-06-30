import dotenv from "dotenv";

// ✅ FORCE absolute path (this WILL fix it)
dotenv.config({
  path: "C:/Users/DELL/OneDrive/Desktop/Project/MERN-Stack-Hospital-Management-System-Web-Application-main/MERN-Stack-Hospital-Management-System-Web-Application-main/backend/.env",
});

import app from "./app.js";
import cloudinary from "cloudinary";

// Debug
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});