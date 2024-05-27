import requests
import os

TRELLO_API_KEY = os.getenv("TRELLO_API_KEY")
TRELLO_API_TOKEN = os.getenv("TRELLO_API_TOKEN")
TRELLO_BOARD_ID = "6651f196a10ff5d856b49057"
TRELLO_DONE_LIST_ID = os.getenv("DONE_LIST_ID")

def get_card_id(card_name):
    url = f"https://api.trello.com/1/boards/{TRELLO_BOARD_ID}/cards"
    query = {
        "key": TRELLO_API_KEY,
        "token": TRELLO_API_TOKEN
    }
    response = requests.get(url, params=query)
    try:
        response.raise_for_status()
        cards = response.json()
        for card in cards:
            if card["name"] == card_name:
                return card["id"]
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"Request error occurred: {req_err}")
    except ValueError as json_err:
        print(f"JSON decode error occurred: {json_err}")
        print(f"Response content: {response.text}")
    return None

def move_card(card_id):
    url = f"https://api.trello.com/1/cards/{card_id}"
    query = {
        "idList": TRELLO_DONE_LIST_ID,
        "key": TRELLO_API_KEY,
        "token": TRELLO_API_TOKEN
    }
    response = requests.put(url, params=query)
    try:
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"Request error occurred: {req_err}")
    except ValueError as json_err:
        print(f"JSON decode error occurred: {json_err}")
        print(f"Response content: {response.text}")
    return None

if __name__ == "__main__":
    card_name = "Automated Documentation Update"  # Adjust as needed
    card_id = get_card_id(card_name)
    if card_id:
        result = move_card(card_id)
        print(result)
    else:
        print("Card not found")
