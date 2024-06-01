# -*- coding: utf-8 -*-
import requests
import os

TRELLO_API_KEY = os.getenv("TRELLO_API_KEY")
TRELLO_API_TOKEN = os.getenv("TRELLO_API_TOKEN")
TRELLO_BOARD_ID = "6651f196a10ff5d856b49057"
TRELLO_LIST_ID = "6652ef544545b2650faefd48"

def create_card(task_name):
    url = f"https://api.trello.com/1/cards?key={TRELLO_API_KEY}&token={TRELLO_API_TOKEN}"
    query = {
        "idList": TRELLO_LIST_ID,
        "name": task_name,
        "desc": "Automated task creation from script"
    }
    response = requests.request("POST", url, params=query)
    return response.json()

if __name__ == "__main__":
    task_name = "Automated Documentation Update"
    create_card(task_name)
