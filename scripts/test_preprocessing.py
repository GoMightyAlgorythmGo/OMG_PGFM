import os
import pandas as pd

def preprocess_whatsapp_chats(directory_path):
    # Adjust the path as necessary
    data_path = os.path.join(os.path.dirname(__file__), '..', 'data')
    files = [os.path.join(data_path, filename) for filename in os.listdir(data_path)]
    
    # Read files with proper encoding handling
    all_lines = []
    for file in files:
        with open(file, 'r', encoding='utf-8', errors='ignore') as f:
            lines = f.readlines()
            all_lines.extend(lines)
    
    # Your preprocessing code here
    return pd.DataFrame({'lines': all_lines})

# Test case
def test_preprocess():
    df = preprocess_whatsapp_chats('../data')
    assert not df.empty  # Modify according to your actual test conditions
    print("Test passed.")

# Run the test
test_preprocess()
