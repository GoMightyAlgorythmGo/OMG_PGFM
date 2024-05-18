import os
import pandas as pd
from sklearn.linear_model import LogisticRegression
import joblib

def build_and_train_model(data_path, model_path):
    # Adjust the path as necessary
    data_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'preprocessed_chat.csv')
    df = pd.read_csv(data_path)
    # Example model building code, modify as needed
    X = df.drop('label', axis=1)
    y = df['label']
    model = LogisticRegression()
    model.fit(X, y)
    joblib.dump(model, model_path)
    return model

# Test case
def test_build_and_train_model():
    model = build_and_train_model('../data/preprocessed_chat.csv', '../models/logistic_model.pkl')
    assert model is not None  # Modify according to your actual test conditions
