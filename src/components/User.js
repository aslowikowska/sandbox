import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import GithubIcon from 'material-ui/svg-icons/action/code';

class User extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        let userId = this.props.match.params.user_name;

        const url = 'https://api.github.com/users/' + userId;

        fetch(url)
            .then(result => result.json())
            .then(user => {
                this.setState({
                    user
                })
            })
            .catch(error => console.log('Unable to show the list'))

    };

    render() {
        const { user } = this.state;
        const style = {
            height: '100%',
            width: '100%',
            padding: 20,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (
            <div className="user-content">
                {user &&
                    <Paper style={style} zDepth={1}>
                        <div className="back" onClick={this.props.history.goBack}>Back to users list</div>
                        <h1>{user.name}</h1>
                        <Avatar src={user.avatar_url} />
                        <div><a href={user.html_url}><GithubIcon />Github repo</a></div>
                        <div>Public repos: {user.public_repos}</div>
                        <div>Followers: {user.followers}</div>
                        <div>Following: {user.following}</div>
                    </Paper>
                }
            </div>
        )
    };
};

export default User;
