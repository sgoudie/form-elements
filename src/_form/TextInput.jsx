import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputError = styled.span`
  color: red;
  display: block;
  margin-top: 5px;
  font-size: 16px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  display: block;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : 'gray')};
  width: 100%;
  max-width: 400px;
  display: block;
  box-sizing: border-box;

  ::placeholder { color: gray; }
`;

const TextInput = ({
  label,
  className,
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const error = errors[name];
  const touch = touched[name];
  return (
    <div className={className}>
      <InputLabel htmlFor={name} error={error}>{label}</InputLabel>
      <Input
        id={name}
        hasError={error && touch}
        {...field}
        {...props}
      />
      {touch && error && <InputError>{error}</InputError>}
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  /* eslint-disable react/forbid-prop-types,react/require-default-props */
  field: PropTypes.object,
  form: PropTypes.object,
  /* eslint-enable react/forbid-prop-types,react/require-default-props */
};

export default styled(TextInput)`
  margin: 5px 0 20px;
  width: 100%;
`;
