
# TripIncento 
The "Flower City" is becoming grey and unsustainable day by day. Recent Carbon Reports from Brampton Today indicate 7 MTCO in carbon emissions, with 60% of all emissions coming from transportation. Furthermore, poor preparation has led to overcrowding, delays, and a poor, irritating, and undesirable transit experience. So, a friend and I built TripIncento, Brampton-focused rewards to citizens helping create a greener future for Brampton.



## Project Overview
TripIncento incentivizes sustainable transportation choices in Brampton by offering rewards to users who reduce their carbon emissions. The web application, built with HTML, CSS, and JavaScript, provides a seamless and engaging experience for users to track their eco-friendly trips, manage travel data, and earn rewards. By motivating Brampton residents to adopt greener travel habits, TripIncento supports the city's efforts to lower its carbon footprint. Key features of the platform include user login, personalized profiles, and competitive leaderboards to track progress. Users can easily visualize their contributions to a more sustainable Brampton, make informed travel decisions, and compare their efforts with others in the community.

## Features

- **User Login & Signup**: Secure user authentication, allowing individuals to sign up, log in, and view their details.
- **Profile Page**: Personalized user profiles displaying travel data, rewards, and achievements.
- **Leaderboards**: Competitive ranking of users based on their sustainable travel efforts.
- **Data Analysis**: Visualizations and graphs to track carbon emission reductions and rewards over time.

## Tech Stack

- **HTML**: For structuring the web pages.
- **CSS**: For styling the frontend, ensuring responsive and modern design.
- **JavaScript**: For dynamic interactions, user authentication, and communicating with the backend API.

<div align="center">
  <img src="https://github.com/user-attachments/assets/adcc5b23-9188-4386-93f4-f78d5f893e58" alt="Main Page" width="600"/>
  <img src="https://github.com/user-attachments/assets/696e64c1-e423-49ba-a631-319495cac344" alt="Login Page" width="600"/>
  <img src="https://github.com/user-attachments/assets/31c7d6e1-c1e9-432a-9c45-d59925786f57" alt="Profile Page" width="600"/>
  <img src="https://github.com/user-attachments/assets/3beb5c0e-f08c-4a9e-bb6c-e71f719b5e67" alt="Leaderboards Page" width="600"/>
  <img src="https://github.com/user-attachments/assets/9575c93b-61dc-4d37-864a-91d8b29b3d18" alt="Data Analysis Page" width="600"/>
</div>

## API Integration

The frontend interacts with the TripIncento backend through RESTful API calls. Key endpoints used by the frontend include:

- `POST /user/login`: Logs in a user.
- `POST /user/signup`: Registers a new user.
- `GET /user/me`: Fetches the logged-in user's profile data.
- `GET /user/top-travelers`: Retrieves the top 5 users who have travelled the most distance.
- `GET /user/trips`: Retrieves all trips for the authenticated user.
- `GET /user/trips/total-distance`: Retrieves the total distance travelled by the authenticated user.
- `POST /user/trips/add`: Adds a new trip for the authenticated user.


For more details on the backend implementation, visit the [TripIncento Backend Repository](https://github.com/tanvirsarao/tripincento-api).


