import React from 'react';
import { LoggedOut, LoggedIn, LoginButton } from '@solid/react';
import { Dashboard } from './components/Dashboard';
// import { PodConnecter } from './components/PodConnecter';


// wrap components that should be visible to people who are not
// logged in inside a < LoggedOut > component, and those that should
// only be visible to those who are logged in inside a<LoggedIn>.
const App: React.FC = () => {
  return <>
    <React.StrictMode>
      <LoggedOut>
        <section className="section">
          <p className="content">Please connect to your Pod to send a Helo world message!</p>
          <p className="content">
            <LoginButton popup="popup.html" className="button is-large is-primary">Connect</LoginButton>
          </p>
        </section>
      </LoggedOut>
      <LoggedIn>
        <Dashboard />
      </LoggedIn>
    </React.StrictMode>
  </>;
}

export default App;
