import React from 'react';
import styles from './Task.module.css'
import Button from '../Button';
import Checkbox from '../Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Task = ({ item, changeCompleted, deleteTask }) => {
    const { id, title, completed } = item
    const rmTask = (postId) => {
        deleteTask(postId)
    }
    return (
        <div className={styles.Task}>
            <p className={styles.task__title}>
                <strong>{id}</strong>) <span>{title}</span>
            </p>
            <div className={styles.task__btns}>
                <Button onClick={e => { rmTask(id) }} className={styles.btn__trash}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
                <Checkbox checked={completed} onChange={e => changeCompleted(id, e)}></Checkbox>
            </div>
        </div>
    );
};

export default Task;