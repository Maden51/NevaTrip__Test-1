import { Clock } from '../../assets/SVG';
import PlusItem from '../PlusItem';
import TimeStamp from '../TimeStamp';
import styles from './Card.module.scss';

const Card = ({card}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={card.imageUrl} alt={card.title} />
      </div>
      <div className={styles.mainBox}>
        <div className={styles.timeIconBox}>
          <Clock /> <span className={styles.timeCount}>{card.duration} часа</span>
        </div>
        <h3>{card.title}</h3>
        <ul className={styles.list}>
          {card.pluses.map((plus, idx) => (
            <PlusItem key={idx} plus={plus} />
          ))}
        </ul>
        <div className={styles.timeBox}>
          {card.times.map((time, idx) => (
            <TimeStamp key={idx} time={time} />
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.costBox}>
          <div className={styles.onlineCost}>{card.onlineCost} ₽</div>
          {card.offlineCost &&
            <div className={styles.offlineCost}>{card.offlineCost} на причале</div>}
        </div>
        <button className={styles.cardButton}>Подробнее</button>
      </div>
    </div>
  )
}

export default Card;