import React, {Component} from 'react';

import {
    Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle
} from 'reactstrap';

class ProfileCard extends Component {
    render() {
        return (
            <Card>
                <a href={this.props.profile.html_url}>
                    <CardImg top width="100%" src={this.props.profile.avatar_url} alt={this.props.profile.id} />
                    <CardBlock>
                        <CardTitle>{this.props.profile.name}</CardTitle>
                        <CardSubtitle>{this.props.profile.login}</CardSubtitle>
                        <CardText>{this.props.profile.bio}</CardText>
                    </CardBlock>
                </a>
            </Card>
        );
    }
}

export default ProfileCard;