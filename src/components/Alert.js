import React, { useContext } from 'react';
import userContext from '../context/Auth/userContext';

const Alert = (props) => {
    const {alert} = useContext(userContext);
    const alerts = {
        'success': "fa-regular fa-circle-check fa-shake",
        'warning': "fa-solid fa-triangle-exclamation fa-shake",
        'danger': "fa-solid fa-circle-xmark fa-shake"
    };
    
    return (
        <div className='msg-alert'>
            { alert.type &&
                <div style={{'--shadow' : alert.type === 'success' ? "#5cb85c": alert.type === 'warning' ? "#f0ad4e" : "#d9534f" }}className={`alert-shadow alert alert-${alert.type} align-items-center`} role="alert">
                    <div className='d-flex flex-row '>
                        <i style={{ 'fontSize': '1.5rem' }} className={alerts[alert.type]}></i>
                        <strong>&nbsp;{alert.type}&nbsp;:&nbsp;</strong>
                        <>{alert.msg}</>
                    </div>
                </div>}
        </div>
    )
}

export default Alert;