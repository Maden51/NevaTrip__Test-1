import styles from './TimeStamp.module.scss';

const TimeStamp = ({time}) => {
  return (
    <span className={styles.timeStamp}>{time}</span>
  )
}

export default TimeStamp;