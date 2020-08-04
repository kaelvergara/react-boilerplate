import React from 'react'

import WithSubscription from 'shared/hocs/withSubscription/withSubscription.component'
import { state as StoreState, actions as StoreActions } from 'modules/examples/stores/state.store'

const Store = (props) => {
  const handleIncrement = () => {
    StoreActions.increment()
  }
  return (
    <div>
      <p>Count will increase by 1 each time increment is clicked</p>
      Count Value: {props.store.count}
      <br />
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  )
}

// TODO Q: what if i want to subscribe to multiple states
export default WithSubscription(Store, StoreState)
