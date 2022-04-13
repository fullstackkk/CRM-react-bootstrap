import './employee-list-item.css';

const EmployeeListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">Vasya Pupkin</span>
            <input type="text" className="list-group-item-input" defaultValue='1000$' />
            <div className="d-flex juctify-content-center align-items-center">
                <button className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <buttun className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </buttun>
                <i className="fas fa-cookie"></i>
            </div>
        </li>
    )
}

export default EmployeeListItem;