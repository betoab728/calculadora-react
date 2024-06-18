
import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo-tr.png';
import Pantalla from './componentes/Pantalla';
import Botonclear from './componentes/Botonclear';
import { useState } from 'react';
import Boton from './componentes/Boton';
import { evaluate } from 'mathjs';

function App() {

  const [input,setInput]=useState('');
  
  const agregarInput = val => {
    setInput( input + val);
  };

  const calcularResultado = () => {

    if (input) {
      setInput(evaluate(input));
    }else {
      alert("ingrese valores para realizar calculos");

    }
   
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freecodecamplogo}

        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton  manejarClick={agregarInput}>2</Boton>
            <Boton  manejarClick={agregarInput}>3</Boton>
            <Boton  manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton  manejarClick={agregarInput}>4</Boton>
            <Boton  manejarClick={agregarInput}>5</Boton>
            <Boton  manejarClick={agregarInput}>6</Boton>
            <Boton  manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton  manejarClick={agregarInput}>7</Boton>
            <Boton  manejarClick={agregarInput}>8</Boton>
            <Boton  manejarClick={agregarInput}>9</Boton>
            <Boton  manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick ={calcularResultado}>=</Boton>
            <Boton manejarClick ={agregarInput}>0</Boton>
            <Boton manejarClick ={agregarInput}>.</Boton>
            <Boton manejarClick ={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <Botonclear manejarClear={()=> setInput('')}>Clear</Botonclear>
          </div>
        </div>
    </div>
  );
}

export default App;
