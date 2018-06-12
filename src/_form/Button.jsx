import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const Button = ({
  className, label, type, disabled, loading, loadingLabel,
}) => (
  <button
    type={type}
    className={className}
    disabled={disabled || loading}
  >
    {(loading && loadingLabel) || label}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string,
  loadingLabel: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  label: undefined,
  loadingLabel: undefined,
  disabled: false,
  loading: false,
  type: 'button',
};

export default styled(Button)`
  padding: 10px;
  background-color: blue;
  color: white;
  border: 1px solid blue;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    background: ${tinycolor('blue').lighten(30).toString()}
  }
`;
