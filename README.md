# Instructional Feedback App

## Description

_Duration: 2 day sprint_

This app is based off of the feedback used at Prime Digital Academy.  Each day, we provide feedback on how the day went.  This app replicates that by rating feeling, understanding, and support and providing comments.  In my app, the completed feedback gets sent to a database where it can be viewed from an admin page.

### Prerequisites

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- Other dependencies can be viewed/installed via the accompanying package.json.

## Installation

1. Create a database named `prime_feedback`
2. The queries in the `data.sql` file are set up to create all the tables and populate the data for the app to run properly, including one example row. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. Postico is recommended to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`. (I like [Visual Studio Code](https://code.visualstudio.com/).)
4. Run `npm run server` in your terminal
4. Run `npm run client` in a new terminal. This will open a new tab in your browser at localhost:3000

## Usage

1. On the first page, the user rates how they are feeling about the day's content using a five star system.
2. Clicking next goes to the understanding page where the same rating system is presented.  There is also now a back button which would return to the previous section.
3. Step three repeats with the next page, suppport.
4. The last page is a review page where all of the information entered is displayed.  The user may either submit, go back, or start over.  Submit posts to the database.
5. After submission, you get a confirmation page with a button returning you to the beginning.
6. The /admin page is not a part of the user navigation but presents a table with all of the data in the database.

## Built With

React and Redux, with help from Material-UI and PostgreSQL.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io), especially Edan and the Woodall Cohort, who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [rogers.aaron.r@mail.com](mailto:rogers.aaron.r@gmail.com)
