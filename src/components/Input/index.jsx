import React from 'react';

import { Container, ParentDiv, ChildDiv } from './styles';

function Input({
  children,
  type,
  name,
  datatestid,
  placeholder,
  onChange,
  id,
  value,
}) {
  return (
    <Container>
      <label htmlFor={ id } className="label-input">
        { name }
      </label>
      <div className='workaround'>
        <ParentDiv>
          <ChildDiv>
            <input
              type="text"
              id={ id }
              data-testid={ datatestid }
              placeholder={ placeholder }
              name={ name }
              onChange={ onChange }
              value={ value }
            />
            {children}
          </ChildDiv>
        </ParentDiv>
      </div>
    </Container>
  );
}

export default Input;
