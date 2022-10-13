## Hello!

For this project I decided to start from scratch.  To get started I used:

- Postgres for the database
- Express Generator to scaffold an Express app for the server
- Create React App for the front end

To start off, I wanted to get the data into the database and write my routes to ensure I was able to access the data.  I included a "schema" file and "seeds" file in the db folder in my server. I wrote a database configuration file to establish the pool connection to my local PSQL database. After writing my 'get' route and corresponding SQL statement, I was able to visit localhost:8080/employees to verify that I was getting the correct JSON object.  After that I wrote the remaining routes and SQL statements.

For the front end of the app, I decided to use the React-Boostrap library for my components.  I knew I wanted to utilize the Modal component to hold my form for creating and updating employees, as it is sleek and simple.  For state management I used Context to allow all my components to be aware of the chnages happening in one another.

To improve this app, I would implement a filter, to allow for only certain results to be displayed.  Also, it looks very simple so some more styling would be necessary.
