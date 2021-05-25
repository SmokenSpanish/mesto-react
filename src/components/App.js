import React from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
        

        <footer className="footer">
            <p className="footer__logo">&copy; 2020 Mesto Russia</p>
        </footer>
    </div>
  );
}

export default App;
