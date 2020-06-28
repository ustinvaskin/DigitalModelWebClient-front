# ITMO-City-Data

cd to front-end

`npm i` node modules
`npm audit fix` if needed
`npm start` to start the server

# Issues to fix

- In Events deal with clearing up markers

# Add a grapch )

```
Data
│   │   │   ├── Data-Show
│   │   │   │   ├── DataShow.jsx
│   │   │   │   ├── EventsInterface
│   │   │   │   │   ├── BaseMap.jsx
│   │   │   │   │   ├── EventsInterface.jsx
```

- in Population deal with Zoom and onchage methon to schoose individual Mo/ Region -> partially working

```
├── ModelPopulation
│   │       │   │   ├── ModelPoplulationDescription.jsx
│   │       │   │   └── ModelPopulation-Interface
│   │       │   │       ├── BaseMap.jsx
│   │       │   │       ├── GeoJsonLayers
│   │       │   │       │   ├── BlocksGeoJsonLayer.jsx
│   │       │   │       │   ├── DistrictGeoJsonIndividualVisible.jsx
│   │       │   │       │   ├── DistrictGeoJsonLayer.jsx
│   │       │   │       │   ├── MOGeoJsonIndividualVisible.jsx
│   │       │   │       │   └── MOGeoJsonLayer.jsx
│   │       │   │       ├── Loading.jsx
│   │       │   │       ├── Map.jsx
│   │       │   │       ├── Model-Population-Interface.jsx
```

- deal with Human Society model create Sigma Grapch and a proper API

```
  │ │ ├── modelEach
  │ │ │ ├── ModelHumanSociety
  │ │ │ │ ├── ModelSocietyIntyerface
  │ │ │ │ │ ├── Chart.jsx
  │ │ │ │ │ ├── Main.jsx
  │ │ │ │ │ ├── Model-Human-Sosiety-Interface.jsx
```

- refactor code - looks super messy

---

# Tree

```
├── components
│ ├── Data
│ │ ├── Data-Show
│ │ │ ├── DataShow.jsx
│ │ │ ├── DataWatch
│ │ │ │ └── DataWatchInterface
│ │ │ │ ├── BaseMap.jsx
│ │ │ │ ├── DataShowInterface.jsx
│ │ │ │ ├── GeoJsonLayers
│ │ │ │ │ ├── BlocksGeoJsonLayer.jsx
│ │ │ │ │ ├── DistrictGeoJsonIndividualVisible.jsx
│ │ │ │ │ ├── DistrictGeoJsonLayer.jsx
│ │ │ │ │ ├── MOGeoJsonIndividualVisible.jsx
│ │ │ │ │ └── MOGeoJsonLayer.jsx
│ │ │ │ ├── Loading.jsx
│ │ │ │ ├── MOChart.jsx
│ │ │ │ ├── Map.jsx
│ │ │ │ └── Styles
│ │ │ │ └── styles.css
│ │ │ ├── EventsInterface
│ │ │ │ ├── BaseMap.jsx
│ │ │ │ ├── EventsInterface.jsx
│ │ │ │ ├── Loading.jsx
│ │ │ │ ├── MainEvents.jsx
│ │ │ │ └── Styles
│ │ │ │ └── styles.css
│ │ │ └── ProblemsInterface
│ │ │ ├── BaseMap.jsx
│ │ │ ├── Loading.jsx
│ │ │ ├── MainProblems.jsx
│ │ │ ├── ProblemsInterface.jsx
│ │ │ └── Styles
│ │ │ └── styles.css
│ │ └── Data.jsx
│ ├── common
│ │ ├── AboutUs
│ │ │ ├── AboutUsPage.jsx
│ │ │ └── SmartManagment.png
│ │ ├── Contacts
│ │ │ ├── ContactsPage.jsx
│ │ │ └── SmartManagment.png
│ │ ├── Footer.jsx
│ │ ├── Materials
│ │ │ ├── MaterialsPage.jsx
│ │ │ └── SmartManagment.png
│ │ └── navbar.jsx
│ ├── homepage
│ │ ├── Styles
│ │ │ ├── ModelHumanSociety
│ │ │ │ └── Model-Human-Sosiety-Interface.jsx
│ │ │ └── Sim.css
│ │ ├── home.jsx
│ │ ├── mainHome.jsx
│ │ └── nccr_logo.svg
│ └── models
│ ├── modelEach
│ │ ├── Model-Human-Sosiety-Interface.jsx
│ │ │ └── ModelSocietyIntyerface
│ │ │ └── SocialGropusFromNodeChart.jsx
│ │ ├── ModelEcology
│ │ │ └── ModelEcologyDescription.jsx
│ │ ├── ModelHumanSociety
│ │ │ ├── ModelHumanSocietyDiscription.jsx
│ │ │ └── ModelSocietyIntyerface
│ │ │ ├── AdmiralDist.jsx
│ │ │ ├── ChartsNode.jsx
│ │ │ ├── Main.jsx
│ │ │ ├── Model-Human-Sosiety-Interface.jsx
│ │ │ ├── SPBServises.jsx
│ │ │ ├── SocialGropusFromNodeChart.jsx
│ │ │ ├── Styles
│ │ │ │ └── styles.css
│ │ │ ├── terr.json
│ │ │ └── test.json
│ │ ├── ModelPopulation
│ │ │ ├── ModelPoplulationDescription.jsx
│ │ │ └── ModelPopulation-Interface
│ │ │ ├── BaseMap.jsx
│ │ │ ├── GeoJsonLayers
│ │ │ │ ├── BlocksGeoJsonLayer.jsx
│ │ │ │ ├── DistrictGeoJsonIndividualVisible.jsx
│ │ │ │ ├── DistrictGeoJsonLayer.jsx
│ │ │ │ ├── MOGeoJsonIndividualVisible.jsx
│ │ │ │ └── MOGeoJsonLayer.jsx
│ │ │ ├── Loading.jsx
│ │ │ ├── MOChart.jsx
│ │ │ ├── Map.jsx
│ │ │ ├── Model-Population-Interface.jsx
│ │ │ └── Styles
│ │ │ └── styles.css
│ │ ├── ModelPopulationSocial
│ │ │ └── ModelPopulationSocial-Interface
│ │ │ ├── BaseMap.jsx
│ │ │ ├── GeoJsonLayers
│ │ │ │ ├── BlocksGeoJsonLayer.jsx
│ │ │ │ ├── DistrictGeoJsonIndividualVisible.jsx
│ │ │ │ ├── DistrictGeoJsonLayer.jsx
│ │ │ │ ├── MOGeoJsonIndividualVisible.jsx
│ │ │ │ └── MOGeoJsonLayer.jsx
│ │ │ ├── Loading.jsx
│ │ │ ├── MOChart.jsx
│ │ │ ├── Map.jsx
│ │ │ ├── Model-Population-Interface.jsx
│ │ │ └── Styles
│ │ │ └── styles.css
│ │ ├── ModelServices
│ │ │ └── ModelServices.jsx
│ │ └── ModelTransport
│ │ └── ModelTransportDiscription.jsx
│ └── modelsAll
│ └── models.jsx
├── img
│ ├── leaf-red.png
│ └── marker.svg
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
└── setupTests.js
```

---

## LOC

(base) ➜ front git:(master) ✗
Comman : git ls-files | xargs wc -l

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
