import datetime

def update_documentation():
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("README.md", "a") as f:
        f.write(f"\n\nUpdated on: {current_time}\n")

if __name__ == "__main__":
    update_documentation()
