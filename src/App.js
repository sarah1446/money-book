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
          content: "",
          price: "",
          time: "",
        }
      ]
    }
  }

  addMoneyList = (text, price, time) => {
    //console.log(time);
    this.setState({
      moneyList: [
        ...this.state.moneyList,
        {
          content: text,
          price: price,
          time: time
        }
      ]
    })
  }

  deleteList = (list) => {
    const moneyList = this.state.moneyList.slice();
    this.setState({
      moneyList: moneyList.filter(t => t !== list),
    })
  }

  render() {
    return (
      <div className="App">
        <AddBar addMoneyList={this.addMoneyList}></AddBar>
        <MoneyListWrap
          moneyList={this.state.moneyList}
          deleteList={this.deleteList}
        ></MoneyListWrap>
      </div>
    )
  }
}
export default App;
