import React, { Component } from 'react';
import logo from '../../logo.svg';
import "../../App.css";

class notFound404 extends Component {
 render() {
 return (
    <div className='App'>
       <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Página não encontrada</h1>
       </header>
       <p className='App-intro'>
            Página não encontrada :( :/
       </p>
    </div>
 );
 }
}
export default notFound404;
