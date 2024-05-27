import requests
import os

TRELLO_API_KEY = os.getenv("TRELLO_API_KEY")
TRELLO_API_TOKEN = os.getenv("TRELLO_API_TOKEN")
TRELLO_BOARD_ID = "6651f196a10ff5d856b49057"
TRELLO_DONE_LIST_ID = "your_done_list_id"  # Replace with your actual Done list ID

def move_card(card_id):
    url = f"https://api.trello.com/1/cards/{card_id}"
    query = {
        "idList": TRELLO_DONE_LIST_ID,
        "key": TRELLO_API_KEY,
        "token": TRELLO_API_TOKEN
    }
    response = requests.put(url, params=query)
    return response.json()

if __name__ == "__main__":
    card_id = "your_card_id"  # Replace with your actual card ID
    result = move_card(card_id)
    print(result)
