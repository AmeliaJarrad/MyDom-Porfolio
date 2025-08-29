import { useForm, ValidationError } from '@formspree/react';
import classes from './ContactForm.module.scss'; // Import your SCSS module

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xwpnvrdr");

  if (state.succeeded) {
    return <p className={classes.successMessage}>Thanks for your interest!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="email">
        Your Email Address
        <input
          id="email"
          type="email"
          name="email"
          required
        />
      </label>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className={classes.validationError}
      />

      <label htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          required
          rows={5}
        />
      </label>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className={classes.validationError}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
