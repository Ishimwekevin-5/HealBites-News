import express from "express";

const app = express();
app.use(express.json());

// API routes - These will be accessible at /api/* in Vercel
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Vercel Serverless Function is healthy" });
});

app.get("/api/news-config", (req, res) => {
  res.json({
    edition: "HealBites Global (Production)",
    version: "1.0.0"
  });
});

// Middleware for other API routes if needed
// ...

export default app;
