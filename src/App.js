import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';
import { Component } from 'react';

class App extends Component {

   state = { 
        counters: [ 
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    }

    handleIncrement = (counter) => {
        const newCounters = [...this.state.counters];
        const index = newCounters.indexOf(counter);
        newCounters[index] = {...counter};
        newCounters[index].value++;
        this.setState({counters:newCounters});    
    }
    
    handleDelete = (counterId) => {
        const newCounters =  this.state.counters.filter( counter => counter.id !== counterId );
        this.setState({ counters: newCounters });
    }

    handleReset = () => {
        const newCounters =  this.state.counters.map( counter => { counter.value = 0; return counter; });
        this.setState({ counters: newCounters });
    }

  render() {
    return(
      <div>
      <Navbar totalCounters={this.state.counters.filter(c => c.value>0).length}></Navbar>
      <main className='container'>
        <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete} ></Counters>
      </main>
    </div>
    );
  }
  
}

export default App;
