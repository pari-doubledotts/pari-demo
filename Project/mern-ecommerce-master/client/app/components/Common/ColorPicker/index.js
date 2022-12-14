/**
 *
 * Color-Picker
 *
 */

 import React, { useState } from 'react';
 import { SwatchesPicker } from 'react-color';
 import Button from '../../Common/Button';
 
 const ColorPicker = props => {
 
     const {
         name,
         value,
         colorPickerChange,
         error,
         label
     } = props
 
     const [color, setColor] = useState([])
     const [showColorPicker, setShowColorPicker] = useState(false)
 
     const _onChange = (updatedColor) => {
 
         let a = color.find(e => e === updatedColor.hex)
         //console.log(a);
 
         if (!a) {
             colorPickerChange(name, [...color, updatedColor.hex])
             setColor([...color, updatedColor.hex])
         }
 
         setShowColorPicker(false)
     }
 
     const style = `select-box${error ? ' invalid' : ''}`;
 
     return (
         <div className={style}>
             {label && <label>{label}</label>}
             <div>
             <Button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}
                 text='Choose Color'>{showColorPicker}</Button>
                 </div>
             {showColorPicker &&
                 <SwatchesPicker
                     name={name}
                     color={color}
                     value={value}
                     onChange={e => {
                         _onChange(e);
                     }}
                 />
             }
             <span className='invalid-message'>{error && error[0]}</span>
             <div className='d-flex align-items-center my-3'>
                 <p>Selected Color :</p>
                 <p className='mx-2'>{color.map((color, index) => { return <button key={index} className='border rounded-circle' style={{ width: '35px', height: '35px', backgroundColor: color }}>{color == color}</button> })}</p>
             </div>
         </div>
     );
 };
 
 export default ColorPicker;
