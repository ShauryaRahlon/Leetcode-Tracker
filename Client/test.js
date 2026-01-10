import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const notion = axios.create({
  baseURL: "https://api.notion.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json"
  }
});

async function test() {
  try {
    const res = await notion.post("/pages", {
      parent: {
        type: "page_id",
        page_id: "2e432f20c678808f9a8efa555d8d46db"
      },
      properties: {
        title: {
          title: [
            { text: { content: "Hello from Code 🚀" } }
          ]
        }
      }
    });

    console.log("SUCCESS");
    console.log("Page URL:", res.data.url);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  }
}

test();
