import pandas as pd

def analyze_data():
    df = pd.read_csv('data/preprocessed_chat.csv')
    # Perform some analysis
    print(df.head())

if __name__ == '__main__':
    analyze_data()
