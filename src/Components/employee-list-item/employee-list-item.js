import './employee-list-item.css';

const EmployeeListItem = ({ name, salary, increase = false }) => {
    let liClass = '';

    if (increase) {
        liClass = "list-group-item increase d-flex justify-content-between"
    } else {
        liClass = "list-group-item d-flex justify-content-between"
    }

    return (
        <li className={liClass}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex juctify-content-center align-items-center">
                <button className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-cookie"></i>
            </div>
        </li>
    )
}

export default EmployeeListItem;