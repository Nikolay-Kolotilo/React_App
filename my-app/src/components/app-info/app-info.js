

import './app-info.css';

const AppInfo = ({employeesQ, IncreaseQ}) => {
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N </h1>
                <h2>Общее число сотрудников: {employeesQ}</h2>
                <h2>Премию получат: {IncreaseQ}</h2>
            </div>
    )
    
}


export default AppInfo