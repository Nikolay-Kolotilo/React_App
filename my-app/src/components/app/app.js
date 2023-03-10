import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanal from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Alex', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Nikolay', salary: 5000, increase: false, rise: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        if (newItem.name.length > 3 && newItem.salary !== '') {
            this.setState(({ data }) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        }
    }

    onToggleProp = (id, prop) => {
   
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id && item.name.length > 3) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    serchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'noreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        let employeesQ = this.state.data.length,
            increaseQ = this.state.data.filter(item => item.increase === true).length
        const visibleData = this.filterPost(this.serchEmp(data, term), filter)
        return (
            <div className="app">
                <AppInfo
                    employeesQ={employeesQ}
                    increaseQ={increaseQ}
                />
                <div className="search-panel">
                    <SearchPanal onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }

}

export default App
