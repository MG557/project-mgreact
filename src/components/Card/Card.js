import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';





const Card = props => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <div>
            <li className={styles.card}>
                {props.title}
                <button className={styles.favoriteButton} onClick={handleClick}>
                    <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
            </button>
            </li>
        </div>
        
    );
};
console.log('card', Card);
export default Card;