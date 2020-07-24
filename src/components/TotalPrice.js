import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="total-price">
        총 지출 : {this.props.totalPrice}원
      </div>
    )
  }
}

export default TotalPrice;