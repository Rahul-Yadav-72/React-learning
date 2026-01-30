import React, { Component } from "react";

class Pagination extends Component {
  state = {
    startIndex: 0,
    itemsPerPage: 5,
  };

  names = [
    "ram",
    "vikash",
    "ashif",
    "rahul",
    "vivek madharchod ",
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7",
    "text8",
    "text9",
    "text10",
    "text11",
    "text12",
    "text13",
    "text14",
    "text15",
    "text16",
    "text17",
    "text18",
    "text19",
    "text20",
    "text21",
    "text22",
    "text23",
    "text24",
    "text25",
    "text26",
    "text27",
    "text28",
    "text29",
    "text30",
    "text31",
    "text32",
    "text33",
    "text34",
    "text35",
    "text36",
    "text37",
    "text38",
    "text39",
    "text40",
    "text41",
    "text42",
    "text43",
    "text44",
    "text45",
    "text46",
    "text47",
    "text48",
    "text49",
    "text50",

  ];

  handleNext = () => {
    this.setState((prevState) => ({
      startIndex: prevState.startIndex + prevState.itemsPerPage,
    }));
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      startIndex: Math.max(
        prevState.startIndex - prevState.itemsPerPage,
        0
      ),
    }));
  };

  render() {
    const { startIndex, itemsPerPage } = this.state;

    const visibleNames = this.names.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <div style={{ padding: "20px" }}>
        <h2>Pagination Example</h2>

        <ul>
          {visibleNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <button
          onClick={this.handlePrev}
          disabled={startIndex === 0}
        >
          Prev
        </button>

        <button
          onClick={this.handleNext}
          disabled={startIndex + itemsPerPage >= this.names.length}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
