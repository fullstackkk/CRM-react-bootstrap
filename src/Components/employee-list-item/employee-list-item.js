import './employee-list-item.css';


const EmployeeListItem = (props) => {
    const { name, salary, onDelete, onToggleIncrease, onToggleRise, rise, increase } = props;

    let liClass = 'list-group-item d-flex justify-content-between';

    if (rise) {
        liClass += " like"
    }
    if (increase) {
        liClass += " increase"
    }

    return (
        <li className={liClass} >
            <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className="d-flex juctify-content-center align-items-center">
                <button tupe='button' className="btn-cookie btn-sm" onClick={onToggleIncrease}>
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

export default EmployeeListItem;
