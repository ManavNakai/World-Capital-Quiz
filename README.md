# World-Capital-Quiz

World-Capital-Quiz is a game that allows users to play a quiz where they need to guess the capital of a randomly displayed country from the database. If the guessed capital is correct, the game continues with the score updated. If the guess is wrong, an alert displays "Wrong Answer" along with the final score, and the game can be restarted using a restart button.

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Project Overview
World-Capital-Quiz is a basic website with a minimal frontend that uses Node.js and Express.js to create a backend server running at localhost:3000 and renders EJS dynamically. PostgreSQL is used to store the countries with their capitals, which are accessed using SQL commands. PG Admin is used as a tool to create the PostgreSQL database, and dotenv is used to manage environment variables for database connection information.

## Tech Stack
- **CSS3**: For styling the web page.
- **JavaScript**: For game logic and interactivity.
- **Node.js**: For setting up the backend server.
- **Express.js**: For managing server-side logic and routing.
- **EJS**: For rendering dynamic content on the web page.
- **PostgreSQL**: For storing countries and their capitals.

## Features
- **Quiz Gameplay**: Displays a random country and prompts the user to guess its capital.
- **Score Tracking**: Updates and displays the score if the guessed capital is correct.
- **Game Over**: Alerts the user with the final score if the guessed capital is wrong.
- **Restart Button**: Allows the user to restart the game.

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js installed on your local machine
- PostgreSQL installed and configured
- PG Admin installed for database management
- A code editor (e.g., VSCode)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ManavNakai/World-Capital-Quiz.git
   ```
2. Navigate to the project directory:
   ```sh
   cd World-Capital-Quiz
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```
4. Set up the PostgreSQL database locally using PG Admin and the `capitals.csv` file provided with the project files:
   
   4.1. **Open PG Admin and create a new database**:
   - Open PG Admin and create a new database named `world`.
  
   4.2. **Create a table**:
   - Create a table named `capitals` with the following structure:
     
     ```
     CREATE TABLE capitals (
       id SERIAL PRIMARY KEY,
       country VARCHAR(255) NOT NULL,
       capital VARCHAR(255) NOT NULL
     );
     ```
     
   4.3. **Import the `capitals.csv` file**:
   - Import the `capitals.csv` file into the `capitals` table. In PG Admin, go to the `capitals` table, right-click and select `Import/Export`, then follow the instructions to import the CSV file.
  
5. Create a `.env` file in the project root and add your PostgreSQL database connection details:
   ```plaintext
   PG_USER=your_db_user
   PG_HOST=localhost
   PG_DATABASE=world
   PG_PASSWORD=your_db_password
   PG_PORT=5432
   ```
6. Start the server:
   ```sh
   node index.js
   ```
7. Open your web browser and go to `http://localhost:3000`.

## Usage
- Open your web browser and navigate to `http://localhost:3000`.
- A country will be displayed, and you need to guess its capital.
- If the guess is correct, the game continues with the score updated.
- If the guess is wrong, an alert displays the wrong answer along with the final score.
- Use the restart button to restart the game.

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Project Link: [https://github.com/ManavNakai/World-Capital-Quiz](https://github.com/ManavNakai/World-Capital-Quiz)

---

Feel free to reach out if you have any questions or need further assistance! Thank you for checking out World-Capital-Quiz!
