import styles from './List.module.scss';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2>Things to do <span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <article className={styles.title}>
                    <h2>BOOKS</h2>
                </article>
                <article className={styles.title}>
                    <h2>MOVIES</h2>
                </article>
                <article className={styles.title}>
                    <h2>GAMES</h2>
                </article>
            </section>
        </div>
    );
  };

  export default List;