import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all: true,
            rise: false,
            salary: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: true
        })
    }


    render() {
        return (
            <div className="btn-group">
                <button className="btn btn-light"
                    type="button"
                    name="all"
                    onClick={this.onValueChange}>
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light"
                    type="button"
                    name="rise"
                    onClick={this.onValueChange}>
                    На повышение
                </button>
                <button className="btn btn-outline-light"
                    type="button"
                    name="salary"
                    onClick={this.onValueChange}>
                    З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;