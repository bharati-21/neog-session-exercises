import React from 'react'

export const Toast = ({setToastState, theme}) => {
  return (
    <div className={`toast ${theme}`} >
        <p>This is a sample Toast!</p>
        <button onClick={e => setToastState(false)}>X</button>
    </div>
  )
}
