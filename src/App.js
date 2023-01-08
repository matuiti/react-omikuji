import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      omikuji: [
        "大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"
      ],
      currentOmikuji: "",
    };
  }
  handleClick() {
    const min = 0;
    const max = this.state.omikuji.length - 1;
    let rand = Math.floor(Math.random() * (max + 1 - min)) + min;
    this.setState({
      currentOmikuji: this.state.omikuji[rand]
    });
  }
  render() {
    return (
      <div className={`text-center flex flex-col gap-6 bg-pink-300 p-8`}>
        <h1 className={`font-bold text-3xl`}>おみくじアプリ</h1>
        <p className={`bg-yellow-200 m-auto p-10`}>{this.state.currentOmikuji}</p>
        <button className={`pt-1 pb-1 pl-4 pr-4 m-auto bg-slate-800 text-white hover:cursor-pointer hover:opacity-40 hover:transition-all rounded-md`} onClick={() => this.handleClick()}>おみくじを引く</button>
      </div>
    );
  }

}

export default App;