import React, { useEffect, useState } from 'react'

const LifecycleMethods = (props) => {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(2)

  useEffect(() => {
    //  place code here that you want to be executed when the component is removed
    console.log('componentDidMount')

    return () => {
      //  place code here that you want to be executed when the component is removed
      console.log('componentWillUnmount')
    }
  }, [])

  useEffect(() => {
    //  place code here that you want to be executed when the component is removed
    console.log('render')
  })

  useEffect(() => {
    //  place code here that you want to be executed when the component is removed
    console.log('count2')
  }, [count2])

  return (
    <div>
      <div>
        <p>Count 1: {count1}</p>
        <button type="button" onClick={() => setCount1(count1 + 1)}>
          Increment
        </button>
      </div>
      <div>
        <p>Count 2: {count2}</p>
        <button type="button" onClick={() => setCount2(count2 + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default LifecycleMethods
