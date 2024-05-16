import unittest
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import pickle
import os

def build_and_train_model(data_path, model_path):
    df = pd.read_csv(data_path)
    X = df['Message']
    y = df['Label']  # Assuming you have a label column

    # Feature extraction
    vectorizer = TfidfVectorizer(max_features=1000)
    X = vectorizer.fit_transform(X).toarray()

    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # Train model
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Save model
    with open(model_path, 'wb') as f:
        pickle.dump(model, f)

    return model

class TestModelBuilding(unittest.TestCase):
    def test_build_and_train_model(self):
        model = build_and_train_model('../data/preprocessed_chat.csv', '../models/logistic_model.pkl')
        self.assertIsNotNone(model)

if __name__ == '__main__':
    unittest.main()
