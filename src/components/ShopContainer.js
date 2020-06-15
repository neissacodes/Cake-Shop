import React, { Component } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function ShopContainer (props) {
    return (
      <div>
        <h2> Number of Cakes = {props.numberOfCakes} </h2>
        <button onClick={props.buyCake}> Buy Cakes </button>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    numberOfCakes: state.cake.numberOfCakes
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
