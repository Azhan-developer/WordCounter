import React from 'react'

export default function Alert(props) {
    return (
       props.Alerts && <div className={`alert alert-${props.Alerts.alertType} alert-dismissible fade show`} role="alert">
        <strong>{props.Alerts.alertValue}</strong> 
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )

}