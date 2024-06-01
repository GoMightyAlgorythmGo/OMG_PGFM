import os
import zipfile

# Specify the directory containing your project files
project_dir = 'C:\\Users\\marco\\my_project'
zip_filename = 'project_files.zip'

# Specify the file extensions and names to include
include_extensions = ['.py', '.ipynb', '.csv', '.json', '.md', '.txt']
include_files = ['README.md', 'requirements.txt', 'setup.py']

# Function to determine if a file should be included
def should_include(file_name):
    for ext in include_extensions:
        if file_name.endswith(ext):
            return True
    if file_name in include_files:
        return True
    return False

# Create a ZIP file
with zipfile.ZipFile(zip_filename, 'w') as zipf:
    for root, dirs, files in os.walk(project_dir):
        for file in files:
            if should_include(file):
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, project_dir)
                zipf.write(file_path, arcname)

print(f'Created {zip_filename} containing project files.')
