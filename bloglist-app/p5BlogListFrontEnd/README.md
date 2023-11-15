This has been copied here as an exercise in dockerizing frontend and backend apps with docker compose. This is required in the last 2 exercises of the Helsinki university full stack  open Part 12 on containers. I need to make a compose for development and another for production

<h1>BlogList app frontend</h1>
Add blogs and articles that you find interestng. They can be commented on and liked. The original poster can delete.

* React
* Redux
* Redux-thunk
* cypress tests
* jest
* Bootstrap
* user authentication


 used in making single-page-application (SPA) that stores some blog posts
 to a NoSQL (document) database on MongoDB. Testing using Jest and Cypress.
 State is managed inside Redux.


docker run --name bloglist-frontend-dev-cont -p 3000:3000 --rm -v /${PWD}:/usr/src/app/ -e REACT_APP_BACKEND_URL=http://localhost:3003 bloglist-frontend-dev