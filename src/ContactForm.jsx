import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';

import Button from './_form/Button';
import TextInput from './_form/TextInput';

class ContactForm extends React.Component {
  render() {
    const {
      className,
      isSubmitting,
      errors,
      dirty,
    } = this.props;
    const hasErrors = Object.keys(errors).length !== 0;
    return (
      <div className={className}>
        <Form>
          <Field
            type="text"
            name="name"
            label="Name"
            placeholder="Michael Scott"
            component={TextInput}
          />
          <Field
            type="email"
            name="email"
            label="Email"
            placeholder="m.scott@dundermifflin.com"
            component={TextInput}
          />
          <Button
            type="submit"
            label="Submit"
            loadingLabel="Submitting"
            loading={isSubmitting}
            disabled={!dirty || hasErrors}
          />
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  className: PropTypes.string.isRequired,
};

ContactForm.defaultProps = {

};

export default withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required('What\'s your name?'),
    email: Yup.string().email('Invalid email address').required('What\'s your email?'),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(styled(ContactForm)`
  padding: 20px;
  border: 1px solid blue;
`);
