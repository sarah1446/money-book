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
    // console.log(t);
    this.props.addMoneyList(this.state.text, this.state.price, this.state.time)
    this.setState({
      text: '',
      price: '',
      // time: t
    })
    // console.log(this.state.time);
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