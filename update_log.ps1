# Define the log file path
$LOG_FILE = "C:\Users\marco\my_project\pj_log_15_5_24____.txt"

# Function to append a log entry
function Append-Log {
    param (
        [string]$Entry
    )
    Add-Content -Path $LOG_FILE -Value $Entry
}

# Log entries
Append-Log "19:30 15.05.2024 Added debugging to the code and verified the content of the .txt files."
Append-Log "19:45 15.05.2024 Updated data preprocessing code to handle specific format of WhatsApp chat exports."
Append-Log "19:50 15.05.2024 Ran the updated code and ensured the preprocessed_chat.csv file is created with the processed data."
Append-Log "20:00 15.05.2024 Verified the preprocessed_chat.csv contains the correct data with 516 to 517 lines."

# Print confirmation
Write-Output "Log file updated successfully."
