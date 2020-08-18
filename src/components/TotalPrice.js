import React from 'react';
import { connect } from "react-redux";
class TotalPrice extends React.Component {
  render() {
    return (
      <div className="total-price">
        총 지출 : {this.props.totalPrice}원
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.money.totalPrice,
  }
}

const connectToStore = connect(
  mapStateToProps
);

export default connectToStore(TotalPrice);