import React from 'react'

function Alert(props) {

  const capatalize = (word) => {
    const lower = word.toLowerCase();
    // console.log((lower.charAt(0).toUpperCase() + lower.slice(1)));
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height:'50px'}}>
     {props.alert &&<div className={`alert alert-${props.alert.type} d-flex align-items-center`} style={{height: "50px"}} role="alert">
        <svg className="bi flex-shrink-0 me-2" style={{width: "2rem", height: "50px"}} role="img" aria-label={`${props.alert.iconType}`}><use href={`${props.alert.icon}`}/></svg> {/**/}
        <div>
            <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    </div>}
    </div>
  ) 
}

export default Alert
