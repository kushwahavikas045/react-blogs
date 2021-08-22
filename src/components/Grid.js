import React from 'react'

const Grid = ({children}) => {
    const container = { width:'90%', maxWidth:'1200px' ,margin:'0 auto', marginTop: '5%' }
    return (
        <div className="ui grid" style={container}>
           {children}
         </div>
    )
}

export default Grid
