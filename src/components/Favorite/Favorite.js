import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const Favorite = () => {
    return (
        <div className={styles.hero}>
            <PageTitle title="Favorite">Favorite</PageTitle>
            <p className={styles.subtitle}>Lorem ipsum, lorem ipsum</p>
        </div>
    );
};
export default Favorite