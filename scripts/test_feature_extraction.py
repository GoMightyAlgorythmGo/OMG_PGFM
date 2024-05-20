import os
import pandas as pd

def preprocess_whatsapp_chats(directory_path):
    try:
        # Adjust the path as necessary
        data_path = os.path.join(os.path.dirname(__file__), '..', 'data')
        files = [os.path.join(data_path, filename) for filename in os.listdir(data_path)]
        # Your preprocessing code here
        print(f"Files found: {files}")
        return pd.DataFrame(files)  # Example return, modify as needed
    except Exception as e:
        print(f"An error occurred: {e}")
        raise

# Test case
def test_preprocess():
    try:
        df = preprocess_whatsapp_chats('../data')
        assert not df.empty  # Modify according to your actual test conditions
        print("Test passed.")
    except Exception as e:
        print(f"Test failed: {e}")

if __name__ == "__main__":
    test_preprocess()
