import React, { Component } from 'react';
import Header from './Header';
import Main from './main';
import Footer from './Footer';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;