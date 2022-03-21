import React from 'react';

// Styles
import { Container } from './styles';

function Button({ children, dataTestId, disabled, type }) {
  return (
    <Container>
      <div className="button-border">
        <div className="button-content">
          <button
            data-testid={ dataTestId }
            type={ type }
            disabled={ disabled }
          >
            {children}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Button;
