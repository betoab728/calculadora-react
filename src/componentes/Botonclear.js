import React  from 'react';
import '../css/Botonclear.css'

const Botonclear = (props) => (

    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>

);

export default Botonclear;