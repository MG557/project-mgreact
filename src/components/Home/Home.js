import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List/List';


const Home = () => {
    return (
        <div className={styles.hero}>
           <Hero />
           <SearchForm />
           <List />
        </div>

    )
}

export default Home