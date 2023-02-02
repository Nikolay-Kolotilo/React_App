import {Component} from 'react';
import './App.css';

const Header = () => { //Реакт компонент
  return <h2>Hello world!</h2>
} 

const Field = () => {
  const holder = 'Enter here'
  const styledField = {
    width: '300px'
  };
  return <input
    placeholder={holder}
    type='Text'
    style={styledField} />
}

class Fielld extends Component {
  render() {
    const holder = 'Enter here Fielld'
    const styledField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type='Text'
      style={styledField} />
  }
}

function Btn() {
    const text = 'Log in'
    const logged = true
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header /> 
      <Field />
      <Fielld />
      <Btn/> 
    </div>
  );
}

export default App;
