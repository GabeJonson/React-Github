import React, {Component} from 'react';

import { Row, Col } from 'reactstrap';

import InputForm from './InputForm';
import ProfileCard from './ProfileCard';
import ReposList from './ReposList';

import '../Styles/CardContainer.css';

const getUser = userName => `https://api.github.com/users/${userName}?client_id=bc66ce58664fed828c2e&client_secret=cd7376592eda605cf6c7e12f591199eb892b19f7`;

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = { user: 'GabeJonson' };

        this.handleUserSearch = this.handleUserSearch.bind(this);
    }

    componentWillMount() {
        this.fetchUser(this.state.user);
    }

    fetchUser(user) {
        fetch(getUser(user))
            .then(res => res.json())
            .then(res => this.setState({ user: res }))
    }

    handleUserSearch(inputedValue) {
        this.fetchUser(inputedValue);
    }

    render() {
        if(!this.state.user) return <div className="loading"></div>;

        return (
            <Row>
                <Col xs="12" md="4" className="card-container">
                    <InputForm onUserSearch={this.handleUserSearch} />
                    <ProfileCard profile={this.state.user} />
                </Col>
                <Col xs="12" md="8">
                    <ReposList repos={this.state.user} />
                </Col>
            </Row>
        );
    }
}

export default Card;