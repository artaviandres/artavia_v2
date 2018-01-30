import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="salute">
            <p>
                HEY!
                <br />
                HOLA!
                <br />
                BONJOUR!
                <br />
                OLÁ!
                <br />
                你好!
                <br />
                HALLO!
            </p>
        </div>
        <div className="container">
            {/* <Menu activePage={1} /> */}
            <p>
                Andrés Artavia is a Web Developer based in Costa Rica who is IN LOVE with React
            </p>
            {/* <Social /> */}
        </div>
        <style jsx>{`
            body {
                background-color: #F8F8F8;
                overflow: hidden;
            }
            .container {
                width: 55%;
                float: left;
                background-color: white;
                height: 100vh;
            }
            .container p {
                margin: 0 auto;
            }
            .salute {
                width: 45%;
                float: left;
            }
            .salute p {
                font-family: arial;
                font-size: 120px;
                margin-top: -50px;
            }
        `}</style>
    </div>
    );
  }
}

export default App;