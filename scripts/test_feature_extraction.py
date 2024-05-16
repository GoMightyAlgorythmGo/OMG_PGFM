import unittest
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
import os

def preprocess_whatsapp_chats(directory_path):
    data = []
    for filename in os.listdir(directory_path):
        if filename.endswith(".txt"):
            with open(os.path.join(directory_path, filename), 'r', encoding='utf-8') as file:
                lines = file.readlines()
                for line in lines:
                    if " - " in line:
                        date_time, message = line.split(' - ', 1)
                        date, time = date_time.split(', ')
                        data.append([date, time, message.strip()])
    df = pd.DataFrame(data, columns=['Date', 'Time', 'Message'])
    return df

class TestFeatureExtraction(unittest.TestCase):
    def test_preprocess(self):
        df = preprocess_whatsapp_chats('../data')
        self.assertFalse(df.empty)

if __name__ == '__main__':
    unittest.main()
