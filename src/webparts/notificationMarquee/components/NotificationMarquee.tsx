import * as React from 'react';
import styles from './NotificationMarquee.module.scss';
import { INotificationMarqueeProps } from './INotificationMarqueeProps';

const NotificationMarquee: React.FC<INotificationMarqueeProps> = ({ message }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        <b>Important Notice: </b> {message}
      </div>
    </div>
  );
};

export default NotificationMarquee;
