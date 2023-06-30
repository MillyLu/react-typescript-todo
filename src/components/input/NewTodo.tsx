import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../TodoSlice';
import styles from './index.module.css'


export function NewTodo () {

   const [data, setData] = useState('');
   const dispatch = useAppDispatch();

   
    return(
        <>

        <h1 className={styles.title}>TODO</h1>
        <div className={styles.add}>
            <input className={styles.add_input} value={data} type="text" onInput={(event) => setData((event.target as HTMLInputElement).value)}/>
        <button className={styles.add_button} onClick={() => {dispatch(addTodo(data)); setData('')}}>Add</button>

        </div>
        </>
       
        
    )
}