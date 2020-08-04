import React from 'react'

const LoopingAndConditional = (props) => {
  const showMe = true
  const hideMe = false

  const items = [
    { fname: 'foo', lname: 'bar' },
    { fname: 'hello', lname: 'world' },
  ]

  return (
    <div>
      {/* if statement */}
      {showMe && <span>if</span>}

      {/* if/else statement */}
      {hideMe ? <span>if</span> : <span>else</span>}

      <div>
        {/* single line loop */}
        {items.map((i) => (
          <span key={i}> {i.fname}</span>
        ))}
      </div>

      <div>
        {/* multiline loop */}
        {items.map((item, i) => {
          return (
            <div key={i}>
              <span> {item.fname}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LoopingAndConditional
