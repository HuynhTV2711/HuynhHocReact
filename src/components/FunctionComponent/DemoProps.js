import React from 'react'

// const DemoProps = (props) => {
    // Bóc tách 
    // const {tenState, setTenState} = props
const DemoProps = ({tenState, setTenState}) => {
  return (
    <div className='mt-10'>
        <button className="px-4 py-2 bg-green-500 rounded text-white" onClick={() => { setTenState(tenState - 10) }}>Giam 10 gia tri</button>
            <p>{tenState}</p>
            <button className="px-4 py-2 bg-green-500 rounded text-white" onClick={() => {setTenState(tenState + 10) }}>Tang 10 gia tri</button>
    </div>
  )
}

export default DemoProps