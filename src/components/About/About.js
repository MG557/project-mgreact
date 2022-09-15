import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';




const About = () => {
    return (
        <div className={styles.hero}>
            <PageTitle title="About">About</PageTitle>
            <p className={styles.subtitle}>Lorem ipsum, lorem ipsum</p>
        </div>
    );
};
export default About