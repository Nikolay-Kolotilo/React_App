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
                { name: 'John', salary: 800, increase: false, rise: true, id: 1  },
                { name: 'Alex', salary: 3000, increase: true, rise: false, id: 2  },
                { name: 'Nikolay', salary: 5000, increase: false, rise: false, id: 3  }        
            ],
            // employeesQ: this.data.lengh
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
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
   
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id && item.name.length > 3) {
                    return {...item, [prop]: !item[prop]}
                } 
                return item;
            })
         }))
    }





    render() {
        let employeesQ = this.state.data.length,
            IncreaseQ = this.state.data.filter((item => item.increase === true)).length
        
        return (
            <div className="app">
                <AppInfo
                    employeesQ={employeesQ}
                    IncreaseQ={IncreaseQ}
                />
                <div className="search-panel">
                    <SearchPanal />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
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
