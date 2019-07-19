## React Redux/Redux Sagas Todos Example

This is a sample code of a application using React, Redux for complex state management and Redux-Sagas for side-effects and async management. It uses a fake fetch function in order to simulate all requests to a backend(edit, delete and add).

The architecture of the code is pretty simple:

- Folders for all components with all needed files inside(JS, CSS, Tests and Img folder)
- A folder to keep all page components
- A folder for store related files
  - Ducks folder to keep all information related to a specific stores(Actions and Reducers)
  - Sagas folder to keep all information related to sagas and side-effects
  - A Index.js to combine stores and apply middlewares (In bigger projects, its better to apply middlewares and create stores inside of the Ducks folder)

#### Running the code

> Run npm install or yarn install
`npm install or yarn install`

> Run npm start to start the application
`npm start`

> Run npm run test to run application tests
`npm run test`


#### Next Steps

- Refactor the code to Typescript(.tsx) instead of JSX
- Create examples with Redux-Observable and Redux-Thunk
- Apply Jest/Enzyme tests to all components

Made with <3 by Rafael Arantes
