import React, { FunctionComponent } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Mail, Lock } from '@mui/icons-material';
import Input from '@core/Input';
import Button from '@core/Button';
import styles from '@styles/components/Login.module.scss';

const Login: FunctionComponent = (): JSX.Element => {
  const { control, handleSubmit } = useForm<FieldValues, any>();

  function onSubmit(data: any) {
    console.log('data -> ', data);
  }

  return (
    <>
      <div className={styles.login_page_container}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            onClick={() => console.log('hello')}
            label="Submit"
            variant="contained"
            btnSize="large"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
