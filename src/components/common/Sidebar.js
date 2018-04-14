import React from 'react';

import { Link } from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import styles from '../../styles';

const SideBar = (props) => {
    return (
        <div>
            <Drawer
                docked={false}
                width={150}
                open={props.showSideBar}
                onRequestChange={props.toggleSideBarProps}
                containerStyle={styles.sideBar}
            >
                <Link to="/" style={styles.link}>
                    <MenuItem onClick={props.toggleSideBarProps} style={styles.link}>
                        Dashboard
                    </MenuItem>
                </Link>
                <Link to="/users" style={styles.link}>
                    <MenuItem onClick={props.toggleSideBarProps} style={styles.link}>
                        Users list
                    </MenuItem>
                </Link>
            </Drawer>
        </div>
    )
};

export default SideBar;
