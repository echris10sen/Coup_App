import json


class card:
    # Class Variables
    name = "Werewolf"
    # Constructor

    def __init__(self):
        print("Hello World")


with open('data.json', 'w') as jsonfile:
    json.dump(card, jsonfile)
