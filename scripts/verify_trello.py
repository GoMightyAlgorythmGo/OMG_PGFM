# -*- coding: utf-8 -*-
import requests
import os

TRELLO_API_KEY = os.getenv("TRELLO_API_KEY")
TRELLO_API_TOKEN = os.getenv("TRELLO_API_TOKEN")

def verify_trello_credentials():
    url = f"https://api.trello.com/1/members/me/boards?key={TRELLO_API_KEY}&token={TRELLO_API_TOKEN}"
    response = requests.get(url)
    if response.status_code == 200:
        print("Success!")
        print(response.json())
    else:
        print("Failed to verify credentials")
        print(f"Status Code: {response.status_code}")
        print(f"Response Text: {response.text}")

if __name__ == "__main__":
    verify_trello_credentials()
