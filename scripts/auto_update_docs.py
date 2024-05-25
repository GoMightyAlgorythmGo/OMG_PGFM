import os
import subprocess

def generate_docs():
    os.system('sphinx-build -b html docs/source docs/build')

def git_commit_push():
    github_token = os.getenv('MY_GITHUB_TOKEN')
    subprocess.run(['git', 'add', 'docs/build'])
    subprocess.run(['git', 'commit', '-m', 'Automated documentation update'])
    subprocess.run([
        'git', 'push',
        'https://<GITHUB_USERNAME>:' + github_token + '@github.com/<GITHUB_USERNAME>/<REPO_NAME>.git',
        'master'
    ])

if __name__ == "__main__":
    generate_docs()
    git_commit_push()
