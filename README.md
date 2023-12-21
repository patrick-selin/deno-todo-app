# Project Title

Fullstack TODO app - Deno, PostgreSQL, Flyway, Docker, Signed Cookies, Sessions, Auth

## Key Features

- CRUD operations to create, read, update, and delete todos.
- Register and log in/log out as a user.
- Model-Viev-Controller layer application structure
- Signed user Cookies and Sessions with Deno
- Authentication and Authorization for user registration and login/logout.
- User management and user-specific data.

(add picture:)
![alt text](http://url/to/img.png)


### Built with

- JavaScript
- Frontend: Deno .eta-templates
- Backend server: Deno
- Containerization: Docker & Docker Compose 
- Database: PostgreSQL
- Database migrations: Flyway
- Auth controller: own implementation
- Cookie/Session storage: Deno KV database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. 

### Prerequisites

- Install Git

    ```
    sudo apt update (Linux)
    brew install git (Mac)
    ```

- Install Docker & Docker Compose

    ```
    Install Docker <https://docs.docker.com/get-docker/>
    Install Docker Compose <https://docs.docker.com/compose/install/>
    ```

### Installing Development setup

How to install and use in your local IDE.

1.  Clone this GitHub Repository
   
    ```sh
    git clone https://github.com/patrick-selin/todo-app.git
    cd todo-app    
    ```

2.  Build the Docker image

    ```sh
    docker compose up --build      
    ```

3.  Using the app

    ```sh
    Go into your browser and use port 8000: <http://localhost:8000/>
    ```


## License

Distributed under the MIT License.
