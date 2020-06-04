import React from 'react';
import './App.css';
import AddBar from './AddBar';
import MoneyListWrap from './MoneyListWrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyList: [
        {
          time: "",
          content: "",
          price: ""
        }
      ]
    }
  }

  addMoneyList = (text, price) => {
    // console.log(text, price);

    this.setState({
      moneyList: [
        ...this.state.moneyList,
        {
          time: '',
          content: text,
          price: price
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <AddBar addMoneyList={this.addMoneyList}></AddBar>
        <MoneyListWrap moneyList={this.state.moneyList}></MoneyListWrap>
      </div>
    )
  }
}
export default App;
