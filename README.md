# Note Taking Django App
## Project prequisites
the following prerequisites are required for the project to work
1. any operating system
2. python 3.10 or higher
3. sqlite3 installed
## How to get the project
1. clone the project
   ```git
   git clone https://github.com/blackwakhu/note-taking-app-django.git
   ```
2. install all the requirements
   ```pip
   pip install -r requirements.txt
   ```
4. navigate to the project folder
   ```shell
   cd note-taking-app-django
   ```
5. make migrations
   ```python
   python manage.py makemigrations note_taker
   ```
6. make sql migrations
   ```python
   python manage.py sqlmigrate note_taker 0001
   ```
7. run migrations
   ```python
   python manage.py migrate
   ```
