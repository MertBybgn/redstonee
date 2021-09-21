import React from 'react'

const Main = ({ children , ...props }) => {
    return (
        <div  {...props}>
         { children }
        </div>
    )
}

export default Main ;
