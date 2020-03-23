import React from 'react';
import classes from './Modal.module.css';
import Jaux from '../../../hoc/Jaux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Jaux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show?'1':'0'
        }}>
        {props.children}
        </div>
    </Jaux>
);


export default modal;