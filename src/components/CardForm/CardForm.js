import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = ({columnId}) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    

    const handleSubmit = e => {
        e.preventDefault();
        //dispatch({type: 'ADD_CARD', payload: { ...columnId, title } });
        dispatch(addCard({ columnId, title }));
        setTitle('');
    }

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};
console.log('cardform', CardForm);
export default CardForm;