import React from "react";
import { ArrowCircleRight, ArrowLeft } from "phosphor-react";
import Welcome from "./welcome";
import First from "./first";
import Second from "./second";
import EnterName from "./name";
import Third from "./third";
import Score from "./score";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      name: "",
      often: 0,
      rarely: 0,
      never: 0,
      option1: 0,
      option2: 0,
      option3: 0,
      germany: 0,
      sweden: 0,
      italy: 0,
      spain: 0,

      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRarely = this.handleRarely.bind(this);
    this.handleOften = this.handleOften.bind(this);
    this.handleOption1 = this.handleOption1.bind(this);
    this.handleOption2 = this.handleOption2.bind(this);
    this.handleOption3 = this.handleOption3.bind(this);
    this.handleGermany = this.handleGermany.bind(this);
    this.handleSweden = this.handleSweden.bind(this);
    this.handleItaly = this.handleItaly.bind(this);
    this.handleSpain = this.handleSpain.bind(this);
    this.startAgain = this.startAgain.bind(this);
  }

  // OnChange event listeners for the individual checkbox inputs

  handleOften = () => {
    let often = this.state.often;
    often = often + 5;
    this.setState({
      often: often,
    });
    console.log(often);
  };

  handleRarely = () => {
    let rarely = this.state.rarely;
    rarely = rarely + 3;
    this.setState({
      rarely: rarely,
    });
    console.log(rarely);
  };

  handleOption1 = () => {
    let option1 = this.state.option1;
    option1 = option1 + 2;
    this.setState({
      option1: option1,
    });
    console.log(option1);
  };
  handleOption2 = () => {
    let option2 = this.state.option2;
    option2 = option2 + 2;
    this.setState({
      option2: option2,
    });
    console.log(option2);
  };

  handleOption3 = () => {
    let option3 = this.state.option3;
    option3 = option3 + 2;
    this.setState({
      option3: option3,
    });
    console.log(option3);
  };

  // select onchange event listeners

  handleGermany = () => {
    let germany = this.state.germany;
    germany = germany + 3;
    this.setState({
      germany: germany,
    });
    console.log(germany);
  };

  handleSpain = () => {
    let spain = this.state.spain;
    spain = spain + 3;
    this.setState({
      spain: spain,
    });
    console.log(spain);
  };

  handleSweden = () => {
    let sweden = this.state.sweden;
    sweden = sweden + 5;
    this.setState({
      sweden: sweden,
    });
    console.log(sweden);
  };

  handleItaly = () => {
    let italy = this.state.italy;
    italy = italy + 5;
    this.setState({
      italy: italy,
    });
    console.log(italy);
  };

  // OnChange event listener for input type text (the Enter name element)
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(event.target.value);
  }

  //Pagination Event listeners for the multistep form

  startAgain = () => {
    let currentPage = this.state.currentPage;
    currentPage = currentPage === 6 ? 1 : currentPage + 1;
    this.setState({
      currentPage: currentPage,
    });
  };

  nextPage = (event) => {
    event.preventDefault();
    let currentPage = this.state.currentPage;
    currentPage =
      currentPage === 2
        ? 3
        : currentPage === 3
        ? 4
        : currentPage === 4
        ? 5
        : currentPage === 5
        ? 6
        : currentPage + 1;
    this.setState({
      currentPage: currentPage,
    });
  };

  previousPage = (event) => {
    event.preventDefault();
    let currentPage = this.state.currentPage;
    currentPage = currentPage <= 1 ? 1 : currentPage - 1;
    this.setState({
      currentPage: currentPage,
    });
  };

  startSurvey = () => {
    let currentPage = this.state.currentPage;
    if (currentPage === 1) {
      return (
        <button type="reset" className="start-btn" onClick={this.nextPage} title="Start survey">
          START THE SURVEY <ArrowCircleRight />
        </button>
      );
    }
    return null;
  };

  nextButton = () => {
    let currentPage = this.state.currentPage;
    if (currentPage >= 2 && currentPage <= 4) {
      return (
        <button type="button" className="next-btn" onClick={this.nextPage} title="Next page">
          NEXT <ArrowCircleRight />
        </button>
      );
    }
    return null;
  };

  finishButton = () => {
    let currentPage = this.state.currentPage;
    if (currentPage === 5) {
      return (
        <button type="button" className="finish-btn" onClick={this.nextPage} title="Finish">
          FINISH <ArrowCircleRight />
        </button>
      );
    }
    return null;
  };

  previousButton = () => {
    let currentPage = this.state.currentPage;
    if (currentPage >= 2 && currentPage <= 5) {
      return (
        <button
          type="button"
          onClick={this.previousPage}
          className="previous-btn"
          title="Previous page"
        >
          <ArrowLeft /> BACK
        </button>
      );
    }
    return null;
  };

  restartButton = () => {
    let currentPage = this.state.currentPage;
    if (currentPage === 6) {
      return (
        <button
          type="submit"
          className="restart-btn"
          onSubmit={this.startAgain}
          title="Start new survey"
        >
          START NEW SURVEY
        </button>
      );
    }
    return null;
  };

  render() {
    return (
      <form className="box">
        <Welcome currentPage={this.state.currentPage} />
        <EnterName
          currentPage={this.state.currentPage}
          name={this.state.name}
          handleChange={this.handleChange}
        />
        <First
          currentPage={this.state.currentPage}
          // name={this.state.name}
          often={this.state.often}
          rarely={this.state.rarely}
          never={this.state.never}
          handleOften={this.handleOften}
          handleRarely={this.handleRarely}
        />
        <Second
          currentPage={this.state.currentPage}
          name={this.state.name}
          option1={this.state.option1}
          option2={this.state.option2}
          option3={this.state.option3}
          handleOption1={this.handleOption1}
          handleOption2={this.handleOption2}
          handleOption3={this.handleOption3}
        />
        <Third
          currentPage={this.state.currentPage}
          name={this.state.name}
          select={this.state.value}
          handleGermany={this.handleGermany}
          handleSweden={this.handleSweden}
          handleItaly={this.handleItaly}
          handleSpain={this.handleSpain}
        />
        <Score
          currentPage={this.state.currentPage}
          name={this.state.name}
          often={this.state.often}
          rarely={this.state.rarely}
          never={this.state.never}
          option1={this.state.option1}
          option2={this.state.option2}
          option3={this.state.option3}
          germany={this.state.germany}
          sweden={this.state.sweden}
          italy={this.state.italy}
          spain={this.state.spain}
        />
        {this.startSurvey()}
        {this.nextButton()}
        {this.previousButton()}
        {this.finishButton()}
        {this.restartButton()}
      </form>
    );
  }
}

export default Form;
