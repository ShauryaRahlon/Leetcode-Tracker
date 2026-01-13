import { notion } from "./notionClient.js";

export async function getOrCreateTopic(topic){
    const cleanTopic = topic.trim();
    console.log(`DEBUG: Querying topic: '${cleanTopic}'`);
    
    const res=await notion.post(
        `/databases/${process.env.TOPICS_DB_ID}/query`,
        {
            filter:{
                property:"Topic Name",
                title:{equals:cleanTopic}
            }
        }
    );
    
    console.log(`DEBUG: Found ${res.data.results.length} matches for '${cleanTopic}'`);
    
    if(res.data.results.length>0){
        return res.data.results[0].id;
    }
    
    console.log(`DEBUG: Creating new topic: '${cleanTopic}'`);
    const created=await notion.post("/pages",{
        parent:{
            type:"database_id",
            database_id:process.env.TOPICS_DB_ID
        },
        properties:{
            "Topic Name":{
                title:[
                    {
                        text:{content:cleanTopic}
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