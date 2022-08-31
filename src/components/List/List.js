import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
//import { useState } from 'react';
//import { useEffect } from 'react';
//import shortid from 'shortid';
import { useSelector } from 'react-redux';

const List = () => {

    const columns = useSelector(state => state.columns);

    /*useEffect(() => {

        setTimeout(() => {
              setColumns([...columns, { id: 4, title: 'Test column'}]);
        }, 2000);

    }, []);*/

    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do <span>soon!</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
  };

  export default List;