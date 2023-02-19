

import './app-info.css';

const AppInfo = ({employeesQ, increaseQ}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников: {employeesQ}</h2>
            <h2>Премию получат: {increaseQ}</h2>
        </div>
    )    
}


export default AppInfo