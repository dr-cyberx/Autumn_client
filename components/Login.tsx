import React, { FunctionComponent, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Mail, Lock } from '@mui/icons-material';
import Input from '@core/Input';
import Button from '@core/Button';
import styles from '@styles/components/Login.module.scss';
import Spacer from './core/Spacer';
import Logo from './Logo';

const Login: FunctionComponent = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FieldValues, any>();
  const [bgImage, setBgImage] = useState<Number>(Math.floor(Math.random() * 4) + 1);
  let bg: any;

  const updateCount = (): void => {
    bg =
      !bg &&
      setInterval(() => {
        setBgImage(Math.floor(Math.random() * 4) + 1); // new
      }, 15000);
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(bg);
  }, []);

  function onSubmit(data: any) {
    console.log('data -> ', data);
  }

  return (
    <>
      <div
        className={styles.login_page_container}
        style={{ backgroundImage: `url('/assets/img_${bgImage}.jpg')` }}>
        <div className={styles.login_form_container}>
          <div className={styles.logo_container}>
            <Logo size="large" altText="logo" />
          </div>
          <div className={styles.title_container}>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.login_form}>
            <Input
              name="email"
              InputType="email"
              control={control}
              label={'Email'}
              required
              startIcon={{ icon: <Mail />, position: 'start', shouldInclude: true }}
            />
            <Input
              name="Password"
              InputType="password"
              control={control}
              label={'Password'}
              required
              startIcon={{ icon: <Lock />, position: 'start', shouldInclude: true }}
            />
            <Spacer />
            <Button
              onClick={() => console.log('hello')}
              label="Login"
              variant="contained"
              btnSize="large"
              type="submit"
            />
          </form>
          <div className={styles.links_container}>
            <p>forgot Password ?</p>
            <Button
              onClick={() => console.log('hello')}
              label="Sign Up"
              variant="contained"
              btnSize="large"
              type="submit"
            />
          </div>
        </div>
      </div>
      <div className={styles.bg_drop_shadow} />
    </>
  );
};

export default Login;
