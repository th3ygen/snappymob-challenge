# SnappyMob Challenge

## Prerequisites

* **Node.js:** (Version 18 or 20 recommended) [Download Node.js](https://nodejs.org/)
* **npm:** (Comes with Node.js)
* **Docker:** (For Challenge C) [Download Docker](https://www.docker.com/get-started/)
* **Git:** (Optional, for version control) [Download Git](https://git-scm.com/downloads)

## Setup

1.  **Clone the Repository (if applicable):**

    ```bash
    git clone https://github.com/th3ygen/snappymob-challenge.git
    cd snappymob-challenge
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

## Build

1.  **Build the TypeScript Code:**

    ```bash
    npm run build
    ```

2. **Build the Docker Image (if not already built):**

    ```bash
    docker build -t snappymob-challenge-c .
    ```

## Running the challenges

1.  **Run Challenge A:**

    ```bash
    ./run-challenge-a.sh
    ```
    This will generate a file named `random.txt` in the `./out` directory. (by default)

2.  **Run Challenge B:**

    ```bash
    ./run-challenge-b.sh
    ```
    This will read the `random.txt` file and print to the console the object and its type.

3.  **Run Challenge C:**

    ```bash
    ./run-challenge-c.sh
    ```
    **IMPORTANT**: Please change the `INPUT_DIR` and `OUTPUT_DIR` in `run-challenge-c.sh` to match your local environment.

    This will execute Challenge C in a Docker container, parsing the data from `random.txt` and saving the results as `parsed.csv` in the `output` directory.
