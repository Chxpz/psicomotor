import React, { Component } from 'react';
import infor from './shared/maininfo';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infor:infor
        }
    }

    render(){
      return (
        <div>
         <h1> Website informativo para abordagem de pessoas com agitação psicomotora com comportamento
         agressivo para profissionais de enfermagem.
        </h1>
        </div>
      );
    }
  }
  
  export default Main;
  



















