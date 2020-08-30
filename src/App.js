import React from 'react';
import './App.css';
import AddBar from './components/AddBar';
import MoneyListWrap from './components/MoneyListWrap';
import TotalPrice from './components/TotalPrice';
import Today from './components/Today';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Today saveDate={this.saveDate}></Today>
        <MoneyListWrap></MoneyListWrap>
        <div className="bottom">
          <TotalPrice></TotalPrice>
          <AddBar storage={this.storage} totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} ></AddBar>
        </div>
      </div>
    )
  }
}
export default App;