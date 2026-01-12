import { notion } from "./notionClient.js";

export async function getOrCreateTopic(topic){
    const res=await notion.post(
        `/databases/${process.env.TOPICS_DB_ID}/query`,
        {
            filter:{
                property:"Topic Name",
                title:{equals:topic}
            }
        }
    );
    if(res.data.results.length>0){
        return res.data.results[0].id;
    }
    const created=await notion.post("/pages",{
        parent:{
            type:"database_id",
            database_id:process.env.TOPICS_DB_ID
        },
        properties:{
            "Topic Name":{
                title:[
                    {
                        text:{content:topic}
                    }
                ]
            }
        }
    })
    return created.data.id;
}


export async function createProblem(problem, topicIds) {
  return notion.post("/pages", {
    parent: { database_id: process.env.PROBLEMS_DB_ID },
    properties: {
      Name: {
        title: [{ text: { content: problem.title } }]
      },
      Difficulty: {
        select: { name: problem.difficulty }
      },
      "LeetCode URL": {
        url: problem.url
      },
      Topics: {
        relation: topicIds.map(id => ({ id }))
      },
      Status: {
        select: { name: "Solved" }
      }
}
  });
}

export async function checkProblemExists(title) {
  const response = await notion.post(`/databases/${process.env.PROBLEMS_DB_ID}/query`, {
    filter: {
      property: "Name",
      title: {
        equals: title
      }
    }
  });
  return response.data.results.length > 0;
}