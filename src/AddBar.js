import React from 'react';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      price: '',
      time: ''
    }
  }
  changeText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  changePrice = (e) => {
    this.setState({
      price: e.target.value,
    })
  }

  sendList = () => {
    // const t = new Date();
    //왜 여기서 new Date하면 안되지
    this.props.addMoneyList(this.state.text, this.state.price);
    this.setState({
      text: '',
      price: '',
      // time: t
    });
    this.props.totalPrice(this.state.price);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeText} value={this.state.text} />
        <input type="text" onChange={this.changePrice} value={this.state.price} />
        <button onClick={this.sendList}>추가</button>
      </div>
    )
  }

}

export default AddBar;