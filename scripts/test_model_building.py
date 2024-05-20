import os
import pandas as pd

def build_and_train_model(data_path, model_path):
    try:
        df = pd.read_csv(data_path, encoding='ISO-8859-1')  # Adjust the encoding if necessary
        # Add your model training code here
        print("Model training completed successfully.")
        return df
    except Exception as e:
        print(f"An error occurred: {e}")
        raise

# Test case
def test_build_and_train_model():
    try:
        df = build_and_train_model('./data/preprocessed_chat.csv', './models/logistic_model.pkl')
        assert not df.empty  # Modify according to your actual test conditions
        print("Test passed.")
    except Exception as e:
        print(f"Test failed: {e}")

if __name__ == "__main__":
    test_build_and_train_model()
