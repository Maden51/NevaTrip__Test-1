import { ListIcon } from '../../assets/SVG';
import styles from './PlusItem.module.scss';

const PlusItem = ({plus}) => {
  return (
    <div className={styles.listItem}>
      <ListIcon /><li>{plus}</li>
    </div>
  )
}

export default PlusItem;