import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactGoogleSheetConnector from 'react-google-sheet-connector';

import {SPREADSHEET_ID} from '../sheetConfig';
import PostLinks from './PostLinks';
import Post from './Post';
import Loader from '../components/Loader';
import cs from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className={cs.header}>
          <h1>My Blog</h1>
        </header>
        <main>
          <Router>
            <Switch>
              <ReactGoogleSheetConnector
                apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                spreadsheetId={SPREADSHEET_ID}
                spinner={
                  <div className={cs.loaderContainer}>
                    <Loader />
                  </div>
                }
              >
                <Route exact path="/" component={PostLinks} />
                <Route exact path="/:index" component={Post} />
              </ReactGoogleSheetConnector>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
