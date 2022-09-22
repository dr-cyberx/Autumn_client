import React, { FunctionComponent, memo, useState, useEffect, CSSProperties } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button, { iButton } from './Button';
import Input, { iInput } from './Input';
import Spacer from './Spacer';
import styles from '@styles/components/core/autumnForm.module.scss';

interface iAutumnForm {
  onSubmit: SubmitHandler<FieldValues>;
  loginInputArray: iInput[];
  loginButtonArray: iButton[];
  style?: CSSProperties;
}

const AutumnForm: FunctionComponent<iAutumnForm> = ({
  loginButtonArray,
  loginInputArray,
  onSubmit,
  style
}): JSX.Element => {
  const { control, handleSubmit } = useForm<FieldValues, any>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.autumn_form} style={style}>
      {loginInputArray.map((loginInput: iInput) => (
        <Input key={loginInput.name} control={control} {...loginInput} />
      ))}
      <Spacer />
      {loginButtonArray.map((loginButton: iButton) => (
        <Button key={loginButton.label} {...loginButton} />
      ))}
    </form>
  );
};

export default AutumnForm;
