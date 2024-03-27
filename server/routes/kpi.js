import { Router } from "express";
import KPI from "../models/KPI.js";

const kpiRoutes = Router();

kpiRoutes.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find({});
    res.status(200).json(kpis);
  } catch (err) {
    res.json({ message: err.message });
  }
});

export default kpiRoutes;
