import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
//import { useState } from 'react';
//import { useEffect } from 'react';
//import shortid from 'shortid';
import { useSelector } from 'react-redux';
//import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router';

const List = () => {

    //const columns = useSelector(state => state.columns);
    
    
    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId));
    const listData = useSelector(state => getListById(state, listId));
    /*useEffect(() => {

        setTimeout(() => {
              setColumns([...columns, { id: 4, title: 'Test column'}]);
        }, 2000);

    }, []);*/

    if(!listData) return <Navigate to='/' />;

    return (
        <div>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <SearchForm />
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>
            <ColumnForm listId={listId}/>
        </div>
    );
  };

  export default List;