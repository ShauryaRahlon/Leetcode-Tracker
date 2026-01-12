import express from "express";

import { getOrCreateTopic, createProblem  } from "./notionService.js";

const router=express.Router();

router.post("/add-problem", async (req, res) => {
  try {
    const { title, difficulty, url, topics } = req.body;

    const topicIds = [];
    for (const t of topics) {
      topicIds.push(await getOrCreateTopic(t));
    }
    console.log("Processing add-problem request: Creating Problem page...");
    await createProblem({ title, difficulty, url }, topicIds);
    res.json({ success: true });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to add problem" });
  }
});

export default router;