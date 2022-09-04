import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};
console.log('card', Card);
export default Card;