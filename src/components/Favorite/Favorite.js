import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Container from '../Container/Container';
import Card from '../Card/Card';
import { getAllFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';



const Favorite = () => {
    const favoriteCards = useSelector(getAllFavoriteCards);
    return (
        <Container>
            <header className={styles.header}>
                <PageTitle children="Favorite" className={styles.title} />
            </header> 
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map((favoriteCard) => (
                                <Card key={favoriteCard.id} title={favoriteCard.title} isFavorite={favoriteCard.isFavorite} id={favoriteCard.id} />
                            )
                    )}
                </ul>
            </article>
        </Container>
    );
};
export default Favorite