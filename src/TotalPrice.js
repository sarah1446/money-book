import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.totalPrice}
      </div>
    )
  }
}

export default TotalPrice;