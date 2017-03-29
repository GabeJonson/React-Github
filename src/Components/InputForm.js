import React, {Component} from 'react';

import { Form, Input } from 'reactstrap';

class InputForm extends Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        let searchQuery = e.target.value.toLowerCase();

        this.props.onUserSearch(searchQuery);
        this.setState({ searchValue: e.target.value })
    }

    render() {
        return (
            <Form className="search-a-person">
                <Input placeholder="Input a name" onInput={this.handleSearch} />
            </Form>
        );
    }
}

export default InputForm;