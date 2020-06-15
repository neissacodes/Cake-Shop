import React, { Component } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

class ShopContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2> Number of Cakes = {props.numberOfCakes} </h2>
        <button onClick={props.buyCake}> Buy Cakes </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    numberOfCakes: state.numberOfCakes;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShopContainer);
