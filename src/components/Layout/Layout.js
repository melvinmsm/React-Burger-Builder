import React from 'react';
import Jaux from '../../hoc/Jaux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Jaux>
        <div>Toolbar,SideDrawer, Backdrop</div>
        <main className={classes.Content}>
        {props.children}
        </main>
    </Jaux>
);

export default layout;