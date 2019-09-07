import React from 'react';
import styles from './StarButton.module.sass';
import { useMemo } from 'react';

import { ReactComponent as FillStar } from '../../assets/icon/star-solid.svg';
import { ReactComponent as EmptyStar } from '../../assets/icon/star-regular.svg';
import Star from '../../components/Star/Star';

const StarButton = props => {
  const { children, position } = props;

  const style = useMemo(() => {
    switch (position) {
      case 'left':
        return {
          icon: {
            marginRight: 'auto'
          },
          text: {
            marginLeft: '10px'
          }
        };
      case 'right':
        return {
          icon: {
            marginLeft: 'auto',
            order: 2
          },
          text: {
            marginRight: '10px'
          }
        };
      default:
        return {
          icon: {
            marginRight: 'auto'
          },
          text: {
            marginLeft: '10px'
          }
        };
    }
  }, [position]);

  return (
    <div className={styles.star_button}>
      <Star isStar={true} style={style.icon}></Star>
      {/* <FillStar style={style.icon}></FillStar> */}
      <span style={style.text}>{children}</span>
    </div>
  );
};

export default StarButton;
