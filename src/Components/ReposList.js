import React, {Component} from 'react';

import {
    ListGroup, ListGroupItem,
    ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';

class ReposList extends Component {
    constructor(props) {
        super(props);

        this.state = { repos: '' }
    }

    componentWillMount() {
        this.fetchRepos(this.props.repos.repos_url);
    }

    fetchRepos(repository) {
        fetch(repository)
            .then(res => res.json())
            .then(res => this.setState({ repos: res }))
    }

    render() {
        if(!this.state.repos) return <div className="loading"></div>

        return (
            <ListGroup>
                {
                    console.log('repos item is ', this.state.repos)}
                {
                    this.state.repos.map((item, key) =>
                        <ListGroupItem key={key}>
                            <a href={item.html_url} target="_black">
                                <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                                <ListGroupItemText>
                                    {item.description}
                                </ListGroupItemText>
                            </a>
                        </ListGroupItem>
                    )
                }
            </ListGroup>
        );
    }
}

export default ReposList;