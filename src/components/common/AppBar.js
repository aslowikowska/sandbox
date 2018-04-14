import React from 'react';
import MuiAppBar from 'material-ui/AppBar';

import styles, {appColors} from "../../styles";

const AppBar = (props) => {
    return (
        <MuiAppBar
            title="Users List APP"
            onLeftIconButtonClick={props.onMenuClickProps}
            style={styles.appBar}
            titleStyle={styles.appBarTitle}
        />
    )
};

export default AppBar;
