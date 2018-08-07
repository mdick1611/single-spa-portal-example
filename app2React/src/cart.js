import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {

    render() {
        return (
            <div>
                <br />
                <ul>
                    <li>Konzert A: {this.props.countA}</li>
                    <li>Konzert B: {this.props.countB}</li>
                    <li>Konzert C: {this.props.countC}</li>
                    <li>Konzert D: {this.props.countD}</li>
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

export default connect(mapStateToProps)(Cart);