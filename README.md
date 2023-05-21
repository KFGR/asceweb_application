## Description
Frontend React application for the ASCE PUPR student chapter. The application is using a folder structure by components, where internal components are in the /Components folders and the pages are in /Pages folder. Below is the folder structure.

    .
    ├── public                   # Folder containing the index.html with the icon for the application
    ├── src                    # Folder containing all the code of the frontend web application
    │   ├── components          # Folder containing internal components used in every page (navigation menu, footer, etc...)
    │   ├── pages         # Folder containing the pages of the application (Home, Competitions, etc...)
    │   ├── App.css         # Application root styling
    │   ├── App.js         # Root component of the application
    │   ├── Index.css         # Application Global styling
    │   ├── Index.js         
    │   ├── logo.svg         
    │   └── reportWebVitals.js               
    ├── .gitignore                     # File used to ommit certain components in pushes
    ├── package-lock.json                   # File holding the dependencies of the application
    ├── staticwebapp.config.json        # File containing the dependencies of the application
    └── README.md

## Requirements
- Install VSCode [Visual Studio Code](https://code.visualstudio.com/download)
- Install NodeJS V18.14.2 [Node v18.14.2](https://nodejs.org/en/blog/release/v18.14.2)

## Usage
- Installing react with node
```terminal
npm install -g create-react-app
```

- Install dependencies packages (Make sure to be in the root of the application folder)
```terminal
npm install
```

- Run the application (Make sure to be in the application folder)
```terminal
npm start
```

## Technologies
* HTML
* CSS
* JavaScript
* React
* EmailJS
* Full calendar

## References and documentation
* [Azure Deployment on static web app](https://learn.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=react)
* [React official documentation](https://react.dev/learn)
* [React bootstrap documentation](https://react-bootstrap.github.io/components/alerts)



