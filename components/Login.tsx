import React, { FunctionComponent, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Mail, Lock, Email } from '@mui/icons-material';
import Input, { iInput } from '@core/Input';
import Button, { iButton } from '@core/Button';
import styles from '@styles/components/Login.module.scss';
import AuthPageLayout from './core/AuthPageLayout';
import AutumnForm from './core/AutumnForm';

const Login: FunctionComponent = (): JSX.Element => {

  const loginInputArray: iInput[] = [
    {
      name: 'email',
      InputType: 'email',
      label: 'Email',
      required: true,
      startIcon: { icon: <Mail />, position: 'start', shouldInclude: true }
    },
    {
      name: 'Password',
      InputType: 'password',
      label: 'Password',
      required: true,
      startIcon: { icon: <Lock />, position: 'start', shouldInclude: true }
    }
  ];
  
  const loginButtonArray: iButton[] = [
    {
      onClick: () => console.log('hello'),
      label: 'Login',
      variant: 'contained',
      btnSize: 'large',
      type: 'submit'
    },
    {
      onClick: () => console.log('hello'),
      label: 'forgot Password ?',
      fontWeight: 500,
      btnSize: 'large',
      type: 'button',
      variant: 'text'
    }
  ];

  function onSubmit(data: any) {
    console.log('data -> ', data);
  }

  return (
    <>
      <AuthPageLayout title="Login">
        <AutumnForm
          loginButtonArray={loginButtonArray}
          loginInputArray={loginInputArray}
          onSubmit={onSubmit}
        />
        <div className={styles.links_container}>
          <Button
            onClick={() => console.log('hello')}
            label="Sign Up"
            variant="contained"
            btnSize="large"
            type="submit"
          />
        </div>
      </AuthPageLayout>
    </>
  );
};

export default Login;
