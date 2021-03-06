import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
      <p className= 'f3'>
      {'This Magic Brain Will Detect Faces. Give It  a Try !!!.'}
      </p>
      <div className= 'center'>
        <div className='pa4 form br3 shadow-5 center'>
         <input type='text' className='f4 pa2 w-70 center' onChange ={onInputChange}  />
         <button className='w-30 grow f4 link ph3 pv dib white bg-light-purple' onClick = { onButtonSubmit } >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;