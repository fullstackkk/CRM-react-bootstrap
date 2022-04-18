import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeesAddForm from '../employee-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex C.', salary: 3000, increase: false, id: 2 },
        { name: 'Lila T.', salary: 500, increase: true, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeeList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;