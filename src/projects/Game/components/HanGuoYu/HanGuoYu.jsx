import React, { useState, useRef, useEffect } from 'react';
import styles from './HanGuoYu.module.sass';
import clsx from 'clsx';

import RoleFront from '../../assets/韓導1.svg';
import RoleBack from '../../assets/韓導2.svg';
import { ReactComponent as Role } from '../../assets/韓導1.svg';

const HanGuoYu = props => {
  let { rolePosition, forwardRef } = props;

  const roleImageList = [RoleFront, RoleBack];
  const [roleImage, setRoleImage] = useState(RoleFront);
  const style = {
    role: {
      backgroundImage: `url(${roleImage})`,
      backgroundRepeat: 'no-repeat'
    }
  };

  // const timerRef = useRef()
  // useEffect(() => {
  //   clearInterval(timerRef.current)
  //   timerRef.current = setInterval(() => {
  //     const newImage = roleImageList.find(img => img !== roleImage)
  //     console.log(roleImageList, roleImage);
  //     setRoleImage(newImage)
  //     // style.role.backgroundImage =
  //   }, 100);
  // }, [roleImage])

  return (
    // <div className={styles.han_guo_yu}>
    // style={style.role}

    <Role
      className={clsx(styles.han_guo_yu, styles[rolePosition])}
      ref={forwardRef}
    />
    // </div>
  );
};

export default HanGuoYu;
