import requests
import json
import sys

def get_input(prompt):
    return input(prompt).strip()

def create_topics_db(token, page_id):
    url = "https://api.notion.com/v1/databases"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    }
    
    payload = {
        "parent": {"type": "page_id", "page_id": page_id},
        "title": [
            {
                "type": "text",
                "text": {"content": "Topics"}
            }
        ],
        "properties": {
            "Topic Name": {
                "title": {}
            }
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code != 200:
        print(f"Error creating Topics DB: {response.status_code}")
        print(response.text)
        sys.exit(1)
        
    data = response.json()
    return data["id"]

def create_problems_db(token, page_id, topics_db_id):
    url = "https://api.notion.com/v1/databases"
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
    }
    
    payload = {
        "parent": {"type": "page_id", "page_id": page_id},
        "title": [
            {
                "type": "text",
                "text": {"content": "Problems"}
            }
        ],
        "properties": {
            "Name": {
                "title": {}
            },
            "Difficulty": {
                "select": {
                    "options": [
                        {"name": "Easy", "color": "green"},
                        {"name": "Medium", "color": "yellow"},
                        {"name": "Hard", "color": "red"}
                    ]
                }
            },
            "LeetCode URL": {
                "url": {}
            },
            "Status": {
                "select": {
                    "options": [
                        {"name": "Solved", "color": "green"},
                        {"name": "Unsolved", "color": "gray"}
                    ]
                }
            },
            "Topics": {
                "relation": {
                    "database_id": topics_db_id,
                    "single_property": {} 
                }
            }
        }
    }
    
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code != 200:
        print(f"Error creating Problems DB: {response.status_code}")
        print(response.text)
        sys.exit(1)
        
    data = response.json()
    return data["id"]

def main():
    print("--- Notion Database Setup Script ---")
    print("This script will create 'Topics' and 'Problems' databases in your Notion page.")
    
    token = get_input("Enter your Notion Integration Token: ")
    if not token:
        print("Token is required.")
        return

    page_id = get_input("Enter the Page ID where databases should be created: ")
    if not page_id:
        print("Page ID is required.")
        return
        
    print("\nCreating 'Topics' database...")
    topics_id = create_topics_db(token, page_id)
    print(f"Success! Topics DB ID: {topics_id}")
    
    print("\nCreating 'Problems' database...")
    problems_id = create_problems_db(token, page_id, topics_id)
    print(f"Success! Problems DB ID: {problems_id}")
    
    print("\n---------------------------------------------------")
    print("SETUP COMPLETE!")
    print("Please update your .env file with the following:\n")
    print(f"NOTION_TOKEN={token}")
    print(f"TOPICS_DB_ID={topics_id}")
    print(f"PROBLEMS_DB_ID={problems_id}")
    print("---------------------------------------------------")

if __name__ == "__main__":
    main()
