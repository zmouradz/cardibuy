import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

async function startServer() {
  const PORT = 3000;

  app.use(express.json());

  // Contact form API - frontend safe mode only
  // No SMTP, no Outlook, no Gmail, no Nodemailer
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message, selectedPackage, duration, price } = req.body;

      console.log("New contact form submission:", {
        name,
        email,
        message,
        selectedPackage,
        duration,
        price,
        date: new Date().toISOString(),
      });

      return res.status(200).json({
        success: true,
        message: "Your message has been received successfully.",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      return res.status(200).json({
        success: true,
        message: "Your message has been received successfully.",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;