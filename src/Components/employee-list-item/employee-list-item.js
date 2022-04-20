import { Component } from 'react';
import './employee-list-item.css';


class EmployeeListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }
    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    onStar = () => {
        this.setState(({ star }) => ({
            star: !star
        }))
    }


    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, star } = this.state;

        let liClass = 'list-group-item d-flex justify-content-between';

        if (star) {
            liClass += " like"
        }
        if (increase) {
            liClass += " increase"
        }

        return (
            <li className={liClass} >
                <span onClick={this.onStar} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className="d-flex juctify-content-center align-items-center">
                    <button tupe='button' className="btn-cookie btn-sm" onClick={this.onIncrease}>
                        <i className="fas fa-cookie" ></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li >
        )
    }
}

export default EmployeeListItem;
