import React from 'react'

export default function Alert(props) {
    return (
        // props.alert , agr prps.alert false ho to kch karo mat agy , true ho to pher warning show karao
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{props.alert.type}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
       
    )
}
