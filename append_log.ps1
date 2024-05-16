# Define the log file path
$LOG_FILE = "C:\Users\marco\my_project\pj_log_15_5_24____.txt"

# Prompt user for log entry
$logEntry = Read-Host "Enter log entry"

# Function to append a log entry
function Append-Log {
    param (
        [string]$Entry
    )
    Add-Content -Path $LOG_FILE -Value $Entry
}

# Append the log entry
Append-Log "$((Get-Date).ToString('HH:mm dd.MM.yyyy')) $logEntry"

# Print confirmation
Write-Output "Log entry appended successfully."
