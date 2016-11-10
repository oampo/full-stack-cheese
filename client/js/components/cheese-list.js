import React from 'react';
import {connect} from 'react-redux';

import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }

    render() {
        const cheeses = this.props.cheeses.map((cheese, index) => <li key={index}>{cheese}</li>);
        return <ul>{cheeses}</ul>;
    }
}

const mapStateToProps = (state, props) => ({
    cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);

