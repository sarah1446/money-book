import React from 'react';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    }
  }
  componentDidMount() {
    this.date();
    this.save();
    //console.log('언제 되는가');
  }

  save = () => {
    //const date = document.querySelector('.date > span');
    const date = this.state.date;
    // console.log(date);
    // console.log(date.content);
    // this.props.saveDate(date);
    // this.props.saveDate(date);
  }

  date = () => {
    const time = new Date();
    const years = time.getFullYear();
    const months = time.getMonth();
    const days = time.getDate();
    this.setState({
      date: `${years}년 ${months + 1}월 ${days}일`,
    })
  }



  render() {
    return (
      <div className="date">
        <span>{this.state.date}</span>
      </div>
    )
  }
}

export default Today;