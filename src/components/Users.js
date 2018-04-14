import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        const url = 'https://api.github.com/users?since=135';

        fetch(url)
            .then(result => result.json())
            .then(Object.values)
            .then(users => {
                this.setState({
                    users
                })
            })
            .catch(error => console.log('Unable to show the list'))
    };

    render() {
        const { users } = this.state;
        return (
            <div className="users-content">
                <Subheader>User list</Subheader>
                {users && users.length > 0 &&
                    <List>
                        {users.map(user =>
                            <Link key={user.id} to={'/user/'+ user.login}>
                                <ListItem
                                    primaryText={user.login}
                                    leftAvatar={<Avatar src={user.avatar_url} />}
                                    rightIcon={<FileFolder />}
                                    />
                            </Link>
                        )}
                    </List>
                }
            </div>
        )
    };
};

export default Users;
