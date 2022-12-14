/**
 *
 * Tag-Input
 *
 */

import React from 'react';
import { TagsInput } from "react-tag-input-component";

const TagInput = props => {
  const {
    defaultValue,
    value,
    error,
    onInputChange,
    multi,
    label,
    name,
    placeHolder
  } = props

  const _onChange = e => {
    onInputChange(name, e);
    console.log("Size", e);
  };

  const style = `select-box${error ? ' invalid' : ''}`;

  return (
    <div className={style}>
     {label && <label>{label}</label>}
      <TagsInput
        isMulti={multi}
        defaultValue={defaultValue}
        value={value}
        name={name}
        placeHolder={placeHolder}
        onChange={e => {
          _onChange(e);
        }}
      />
      <span className='invalid-message'>{error && error[0]}</span>
    </div>
  );
};

export default TagInput;