import React from 'react';
import './App.css';
import AddBar from './components/AddBar';
import MoneyListWrap from './components/MoneyListWrap';
import TotalPrice from './components/TotalPrice';
import Today from './components/Today';
// import { v4 as uuidv4 } from "uuid";

class App extends React.Component {

  storage = () => {
    localStorage.setItem('list', JSON.stringify(this.state.moneyList));
    localStorage.setItem('totalPrice', JSON.stringify(this.state.totalPrice));
  }
  saveDate = (date) => {
    // console.log(date);
    localStorage.setItem('date', date);
  }

  //컴포넌트 업데이트 될때마다 갱신
  componentDidUpdate() {
    this.storage();
  }

  //새로고침했을 때 데이터가 있다면 그려주기 
  componentWillMount() {
    if (localStorage.getItem('list')) {
      //기존데이터 그리기
      this.setState({
        moneyList: JSON.parse(localStorage.list),
        totalPrice: JSON.parse(localStorage.totalPrice)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Today saveDate={this.saveDate}></Today>
        <MoneyListWrap></MoneyListWrap>
        <div className="bottom">
          <TotalPrice></TotalPrice>
          <AddBar storage={this.storage} totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
        </div>
      </div>
    )

  }
}
export default App;