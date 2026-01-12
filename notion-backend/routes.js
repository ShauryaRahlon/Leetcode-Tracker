import express from "express";

import { getOrCreateTopic, createProblem, checkProblemExists } from "./notionService.js";

const router=express.Router();

router.post("/add-problem", async (req, res) => {
  try {
    const { title, difficulty, url, topics } = req.body;
    
    //check if it already exists in db
    const exists = await checkProblemExists(title);
    if(exists){
      return res.status(409).json({error:"Already exists in db"});
    }
    
    if (!topics || !Array.isArray(topics)) {
      return res.status(400).json({ error: "Topics must be an array" });
    }

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

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default router;