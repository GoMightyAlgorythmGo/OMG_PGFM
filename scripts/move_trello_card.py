import requests
import os

TRELLO_API_KEY = os.getenv("TRELLO_API_KEY")
TRELLO_API_TOKEN = os.getenv("TRELLO_API_TOKEN")
TRELLO_BOARD_ID = "6651f196a10ff5d856b49057"
TRELLO_DONE_LIST_ID = os.getenv("DONE_LIST_ID")

print("Environment Variables:")
print(f"TRELLO_API_KEY: {TRELLO_API_KEY}")
print(f"TRELLO_API_TOKEN: {TRELLO_API_TOKEN}")
print(f"TRELLO_BOARD_ID: {TRELLO_BOARD_ID}")
print(f"TRELLO_DONE_LIST_ID: {TRELLO_DONE_LIST_ID}")

def get_card_id(card_name):
    if not TRELLO_API_KEY or not TRELLO_API_TOKEN or not TRELLO_BOARD_ID:
        print("Environment variables for Trello API are not set correctly.")
        return None

    url = f"https://api.trello.com/1/boards/{TRELLO_BOARD_ID}/cards"
    query = {
        "key": TRELLO_API_KEY,
        "token": TRELLO_API_TOKEN
    }
    print(f"Requesting card details from URL: {url}")
    response = requests.get(url, params=query)
    try:
        response.raise_for_status()
        if response.status_code == 200:
            cards = response.json()
            for card in cards:
                if card["name"] == card_name:
                    print(f"Found card: {card_name} with ID: {card['id']}")
                    return card["id"]
        else:
            print(f"Unexpected status code received: {response.status_code}")
            print(f"Response content: {response.text}")
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
    except requests.exceptions.RequestException as req_err:
        print(f"Request error occurred: {req_err}")
    except ValueError as json_err:
        print(f"JSON decode error occurred: {json_err}")
        print(f"Response content: {response.text}")
    return None

def move_card(card_id):
    if not TRELLO_API_KEY or not TRELLO_API_TOKEN or not TRELLO_DONE_LIST_ID:
        print("Environment variables for Trello API are not set correctly.")
        return None

    url = f"https://api.trello.com/1/cards/{card_id}"
    query = {
        "idList": TRELLO_DONE_LIST_ID,
        "key": TRELLO_API_KEY,
        "token": TRELLO_API_TOKEN
    }
    print(f"Moving card ID {card_id} to list ID {TRELLO_DONE_LIST_ID}")
    response = requests.put(url, params=query)
    try:
        response.raise_for_status()
        if response.status_code == 200):
            result = response.json()
            print(f"Successfully moved card. Response: {result}")
            return result
        else:
            print(f"Unexpected status code received: {response.status_code}")
            print(f"Response content: {response.text}")
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
