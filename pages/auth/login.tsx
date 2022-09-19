import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import LoginPage from '../../components/Login';
import { NextPage } from 'next';

interface iLogin {}

const Login: NextPage = (): JSX.Element => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;
