import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';





const Card = props => {
    const dispatch = useDispatch();

    const handleClickFavorite = (e) => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id));
    }
    const handleClickRemove = (e) => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }

    return (
        <div>
            <li className={styles.card}>
                {props.title}
                <div>
                <button className={styles.favoriteButton} onClick={handleClickFavorite}>
                    <span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
                </button>
                <button className={styles.favoriteButton} onClick={handleClickRemove}>
                    <span className='fa fa-trash'></span>
                </button>
                </div>
            </li>
        </div>
        
    );
};
console.log('card', Card);
export default Card;