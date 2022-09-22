import React, { memo, ReactNode, useEffect, useState } from 'react';
import styles from '@styles/components/core/authPageLayout.module.scss';
import Logo from '@components/Logo';

interface iAuthPageLayout {
  children: ReactNode;
  title: string;
}

const AuthPageLayout: React.FunctionComponent<iAuthPageLayout> = ({
  children,
  title
}): JSX.Element => {
  const [bgImage, setBgImage] = useState<Number>(Math.floor(Math.random() * 4) + 1);
  let bg: any;

  const updateCount = (): void => {
    bg =
      !bg &&
      setInterval(() => {
        setBgImage(Math.floor(Math.random() * 4) + 1); // new
      }, 5000);
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(bg);
  }, []);

  return (
    <>
      <div
        className={styles.auth_page_container}
        style={{ backgroundImage: `url('/assets/img_${bgImage}.jpg')` }}>
        <div className={styles.auth_form_container}>
          <div className={styles.logo_container}>
            <Logo size="large" altText="logo" />
          </div>
          <div className={styles.title_container}>
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      </div>
      <div className={styles.bg_drop_shadow} />
    </>
  );
};

export default memo(AuthPageLayout);
