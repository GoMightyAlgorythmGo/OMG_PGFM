# Define the test file path
$TEST_FILE = "C:\Users\marco\my_project\scripts\test_preprocessing.py"

# Create test directory if not exists
if (-Not (Test-Path -Path "C:\Users\marco\my_project\scripts")) {
    New-Item -Path "C:\Users\marco\my_project\scripts" -ItemType Directory
}

# Update the test script
@"
import unittest
import pandas as pd
from your_module import preprocess_whatsapp_chats

class TestPreprocessing(unittest.TestCase):
    def test_preprocess(self):
        df = preprocess_whatsapp_chats('../data')
        self.assertFalse(df.empty)
        self.assertTrue('Date' in df.columns)
        self.assertTrue('Time' in df.columns)
        self.assertTrue('Author' in df.columns)
        self.assertTrue('Message' in df.columns)

if __name__ == '__main__':
    unittest.main()
"@ | Out-File -FilePath $TEST_FILE -Encoding utf8

# Print confirmation
Write-Output "Automated testing setup completed successfully."
