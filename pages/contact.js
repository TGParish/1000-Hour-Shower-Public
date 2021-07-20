import Head from 'next/head';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

import classes from '../styles/new-contact-form.module.css';

export default function NewContactForm() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contactform`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.data.status == 200) {
        // console.log('Success');
      }
      setSuccess(true);
      console.log(response);
    } catch (err) {
      setFailure(true);
      console.error(err);
    }
  }

  {
    if (success) {
      return <p className={classes.success}>Message Sent!</p>;
    }
    if (failure) {
      return <p className={classes.success}>Something went wrong 😟</p>;
    }
  }

  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="contact me" />
      </Head>
      <div className={classes.container}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="name">Name:</label>
          <input
            {...register('name', {
              required: 'A name is required',
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="email">Email:</label>
          <input
            {...register('email', {
              required: 'An email is required',
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Enter a valid email',
              },
              minLength: { value: 4, message: 'Email is too short' },
              maxLength: { value: 50, message: 'Email is too long' },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            {...register('message', {
              required: 'A message is required',
              max: 1000,
            })}
          />
          {errors.message && (
            <div className={classes.messagealert}>{errors.message.message}</div>
          )}

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
