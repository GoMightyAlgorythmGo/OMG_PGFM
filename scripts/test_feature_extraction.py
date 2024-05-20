import os
import pandas as pd

def preprocess_whatsapp_chats(directory_path):
    # Adjust the path as necessary
    data_path = os.path.join(os.path.dirname(__file__), '..', 'data')
    files = [os.path.join(data_path, filename) for filename in os.listdir(data_path)]
    # Your preprocessing code here
    return pd.DataFrame(files)  # Example return, modify as needed

# Test case
def test_preprocess():
    model = build_and_train_model('./data/preprocessed_chat.csv', './models/logistic_model.pkl')
    assert not df.empty  # Modify according to your actual test conditions
