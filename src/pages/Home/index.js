import { Component } from "react";
import axios from "axios";
import "./style.css";

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('')
    }

    render() {
        return (
            <>
                <p>Aqui é mais uma página em ReactJS</p>
            </>
        )
    }
}

export default Home;
