# Spotiapp

Angular app that consumes the Spotify API to show artists and their latest releaes, as well as previews for their top tracks.
This was developed following the [Angular course by Fernando Herrera](https://www.udemy.com/course/angular-2-fernando-herrera/).

## How to run this project

### Clone the project
  Run `git clone https://github.com/j-millan/spotiapp.git`.

### Auth token
  You have to create a Spotify developer account and use your credentials to generate an auth token every hour using postman and replace it in `src/app/services/spotify.service.ts`.
  
  In postman, make a post request to `https://accounts.spotify.com/api/token/` with body:
    
    {
      grant_type: client_credentials,
      client_id: your_client_id_here,
      client_secret: your_client_secret_here
    }

### Run the development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

