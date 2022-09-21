import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
//import SearchForm from '../SearchForm/SearchForm';
//import List from '../List/List';
import Lists from '../Lists/Lists';
import ListForm from '../ListForm/ListForm';


const Home = () => {
    return (
        <div className={styles.hero}>
           <Hero />
           <Lists />
           <ListForm />
        </div>

    )
}

export default Home