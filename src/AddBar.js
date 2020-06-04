import React from 'react';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      price: ''
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

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeText} value={this.state.text} />
        <input type="text" onChange={this.changePrice} value={this.state.price} />
        <button onClick={
          () => {
            this.props.addMoneyList(this.state.text, this.state.price)
          }
        }
        >
          추가
        </button>
      </div>
    )
  }

}

export default AddBar;