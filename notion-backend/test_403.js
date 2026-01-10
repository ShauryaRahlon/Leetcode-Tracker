import "dotenv/config";
import { createProblem, getOrCreateTopic } from "./notionService.js";

async function testPermission() {
  console.log("🔍 Debugging 403 Forbidden Error...");
  console.log(`Using Topics DB: ${process.env.TOPICS_DB_ID}`);
  console.log(`Using Problems DB: ${process.env.PROBLEMS_DB_ID}`);

  try {
    const title = "Two Sum";
    const difficulty = "Easy";
    const url = "https://leetcode.com/problems/two-sum/";
    const topics = ["Arrays", "HashMap"];

    console.log("\n1. Testing getOrCreateTopic...");
    const topicIds = [];
    for (const t of topics) {
      console.log(`   Processing: ${t}`);
      topicIds.push(await getOrCreateTopic(t));
    }
    console.log("   ✅ Topics processed. IDs:", topicIds);

    console.log("\n2. Testing createProblem...");
    await createProblem({ title, difficulty, url }, topicIds);
    console.log("   ✅ Problem created successfully!");

  } catch (error) {
    console.error("\n❌ FAILED!");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", JSON.stringify(error.response.data, null, 2));
    } else {
      console.error("Error:", error.message);
    }
  }
}

testPermission();
