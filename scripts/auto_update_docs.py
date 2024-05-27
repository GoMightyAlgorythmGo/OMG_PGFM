import datetime
import sys

def update_documentation():
    try:
        current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open("README.md", "a") as f:
            f.write(f"\n\nUpdated on: {current_time}\n")
    except Exception as e:
        print(f"Failed to update documentation: {e}")
        sys.exit(1)

if __name__ == "__main__":
    update_documentation()
