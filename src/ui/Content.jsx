import React from 'react'

const content = ({ children }) => {
    return (
        <div className='flex flex-1 flex-col gap-5'>
            {children}
        </div>
    )
}

export default content