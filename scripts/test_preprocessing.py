import unittest
import pandas as pd
import re
import os

# Define the preprocessing function
def preprocess_whatsapp_chats(directory_path):
    all_data = []
    
    for filename in os.listdir(directory_path):
        if filename.endswith(".txt"):
            file_path = os.path.join(directory_path, filename)
            with open(file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
            
            for line in lines:
                match = re.match(r'^\[(\d{2}\.\d{2}\.\d{2}), (\d{2}:\d{2}:\d{2})\] (.+?): (.+)', line)
                if match:
                    date, time, author, text = match.groups()
                    all_data.append([date, time, author, text.strip()])
    
    df = pd.DataFrame(all_data, columns=['Date', 'Time', 'Author', 'Message'])
    return df

class TestPreprocessing(unittest.TestCase):
    def test_preprocess(self):
        # Use absolute path for the data directory
        directory_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data'))
        df = preprocess_whatsapp_chats(directory_path)
        self.assertFalse(df.empty)
        self.assertTrue('Date' in df.columns)
        self.assertTrue('Time' in df.columns)
        self.assertTrue('Author' in df.columns)
        self.assertTrue('Message' in df.columns)

if __name__ == '__main__':
    result = unittest.main(exit=False)

    # Append log entry if tests pass
    if result.result.wasSuccessful():
        log_entry = "Automated test passed successfully for preprocessing."
    else:
        log_entry = "Automated test failed for preprocessing."

    # Define the log file path
    log_file = "C:\\Users\\marco\\my_project\\pj_log_15_5_24____.txt"

    # Append the log entry
    with open(log_file, "a") as f:
        from datetime import datetime
        f.write(f"{datetime.now().strftime('%H:%M %d.%m.%Y')} {log_entry}\n")
