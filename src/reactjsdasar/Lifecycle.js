import React, { Component } from 'react';
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       food: 'Bakso',
       data: {},
       tampilHalamanSub: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        this.setState ({
          data : json
        })
      })
  }

  ubahMakanan(value) {
    this.setState({
      food: value
    })
  }
  
  render() {
    console.log('data : ', this.state.data);
    return (
      <div>
        <h2>{ this.state.food }</h2>

        {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value => this.ubahMakanan(value))} />}

        <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>
      </div>
    );
  }
}