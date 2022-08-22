import './App.css'
import {Component} from "react";
import Input from "./components/Input";
import Result from "./components/Result";
import {connect} from "react-redux";
import {input} from "./store/reducers/predictReducer";

class App extends Component {

    render() {

    const {value, input, result, newGame } = this.props

    return (
        <div className="App">
            {!!newGame && <div>New game started!!!</div>}
            <Input value={value} input={input} />
            <Result result={result} />
        </div>
    )
  }
}
const mapStateToProps = ({slice}) => {
    return {
        value: slice.value,
        result: slice.result,
        newGame: slice.newGame
    }
}
const mapDispatchToProps = {input}

export default connect(mapStateToProps, mapDispatchToProps)(App);
