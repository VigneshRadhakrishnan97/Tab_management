import React from "react";
import Titlelist from "./Titlelist";
import "./style.css";

var No = 2;
class App extends React.Component {
  state = {
    titles: ["Tab1"],
    current: 0,
  };

  propmt = () => {
    if (this.state.titles.length > 9) {
      alert("Max allowed titles are 10...");
    } else {
      let titlename = prompt("Please enter title name", "Tab" + No);

      if (titlename !== null) {
        No++;
        console.log(titlename);
        this.setState({ titles: [...this.state.titles, titlename] });
      }
    }
  };

  ondrag = (from, to) => {
   
    let arr_temp = [...this.state.titles];
    //console.log(arr_temp);
    let tmp = arr_temp[from];
    arr_temp[from] = arr_temp[to];
    arr_temp[to] = tmp;
    //console.log(arr_temp);
    this.setState({ titles: [...arr_temp] });
  };

  close = (title) => {
if (this.state.titles.length ===1) {
  alert("Atleast 1 title should be there...");
  return;
} 
    let i = this.state.titles.indexOf(title);

    let arr_temp = [...this.state.titles];
    arr_temp.splice(i, 1);
    this.setState({ titles: [...arr_temp] });
  };

  render() {
    return (
      <div className="container">
        <button
          className="btn-p"
          onClick={() => this.setState({ current: this.state.current - 3 })}
          style={{
            display: this.state.current !== 0 ? "inline-block" : "none",
          }}
        >
          &lt;
        </button>
        <div className="titlelist">
          <Titlelist
            titlelist={this.state.titles}
            current={this.state.current}
            ondrag={this.ondrag}
            close={this.close}
          />
        </div>
        <button
          className="btn-n"
          onClick={() => this.setState({ current: this.state.current + 3 })}
          style={{
            display:
              this.state.titles.length - this.state.current <= 3
                ? "none"
                : "inline-block",
          }}
        >
          &gt;
        </button>
        <button
          className="btn-a"
          onClick={() => {
            this.propmt();
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
