import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        //dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        //dispatch({type: 'ADD_COLUMN', payload: { title, icon } });
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
    }

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>New list</Button>
        </form>
	);
};

export default ListForm;