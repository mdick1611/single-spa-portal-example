import React from 'react';
import { connect } from 'react-redux';

class Catalog extends React.Component {

    add_item_A = () => {
        this.props.globalEventDistributor.dispatch({ type: 'ADD_TO_CART_A'})
    };

    add_item_B = () => {
        this.props.globalEventDistributor.dispatch({ type: 'ADD_TO_CART_B'})
    };

    add_item_C = () => {
        this.props.globalEventDistributor.dispatch({ type: 'ADD_TO_CART_C'})
    };

    add_item_D = () => {
        this.props.globalEventDistributor.dispatch({ type: 'ADD_TO_CART_D'})
    };

    render() {
        return (
            <div>
                <br />
                <ul>
                    <li>Konzert A&nbsp;<button onClick={this.add_item_A}>Hinzufügen</button></li>
                    <li>Konzert B&nbsp;<button onClick={this.add_item_B}>Hinzufügen</button></li>
                    <li>Konzert C&nbsp;<button onClick={this.add_item_C}>Hinzufügen</button></li>
                    <li>Konzert D&nbsp;<button onClick={this.add_item_D}>Hinzufügen</button></li>
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        countA: state.countA,
        countB: state.countB,
        countC: state.countC,
        countD: state.countD
    };
}

export default connect(mapStateToProps)(Catalog);