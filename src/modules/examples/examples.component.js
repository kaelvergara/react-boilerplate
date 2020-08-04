// load libs
import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Datatable from 'modules/examples/screens/datatable/datatable.component'
import Form from 'modules/examples/screens/form/form.component'
import LoopingAndConditional from 'modules/examples/screens/looping-and-conditional/looping-and-conditional.component'
import LifecycleMethods from 'modules/examples/screens/lifecycle-methods/lifecycle-methods.component'

import Local from 'modules/examples/screens/state/local/local.component'
import AsyncLocal from 'modules/examples/screens/state/asyncLocal/asyncLocal.component'

import Store from 'modules/examples/screens/state/store/store.component'
import AsyncStore from 'modules/examples/screens/state/asyncStore/asyncStore.component'

import style from './examples.module.scss'

const Examples = (props) => {
  return (
    <div>
      <h4>Examples</h4>
      <div className={`${style.wrapper}`}>
        <div className={`${style.nav} bg-light border p-3 mr-4`}>
          <ul className={`${style.topic}`}>
            <span className="font-weight-bold">General</span>
            <li>
              <Link to="/examples/lifecycle-methods" className={style.link}>
                Lifecycle Methods
              </Link>
            </li>
            <li>
              <Link to="/examples/looping-and-conditional" className={style.link}>
                Looping and Conditional Statements
              </Link>
            </li>
            <li>
              <Link to="/examples/form" className={style.link}>
                Using props
              </Link>
            </li>
          </ul>
          <ul className={`${style.topic}`}>
            <span className="font-weight-bold">UI Components</span>
            <li>
              <Link to="/examples/datatable" className={style.link}>
                Datatable
              </Link>
            </li>
            <li>
              <Link to="/examples/form" className={style.link}>
                Form
              </Link>
            </li>
            <li>
              <Link to="/examples/form" className={style.link}>
                Calendar
              </Link>
            </li>
          </ul>
          <ul className={`${style.topic}`}>
            <span className="font-weight-bold">State Management</span>
            <li>
              <Link to="/examples/state/local" className={style.link}>
                Local State
              </Link>
            </li>
            <li>
              <Link to="/examples/state/store" className={style.link}>
                Shared Store
              </Link>
            </li>
            <li>
              <Link to="/examples/state/async-local" className={style.link}>
                Async Action on Local State
              </Link>
            </li>
            <li>
              <Link to="/examples/state/async-store" className={style.link}>
                Async Action on Shared Store
              </Link>
            </li>
          </ul>
          <ul className={`${style.topic}`}>
            <span className="font-weight-bold">Routing</span>
            <li>
              <Link to="/examples/datatable" className={style.link}>
                Query/Route Params
              </Link>
            </li>
            <li>
              <Link to="/examples/form" className={style.link}>
                Lazy Loading / Code Split
              </Link>
            </li>
          </ul>
          <ul className={`${style.topic}`}>
            <span className="font-weight-bold">Hooks</span>
          </ul>
        </div>
        <div className={`${style.content} bg-light border p-3`}>
          <Switch>
            <Route exact path={`${props.match.path}/lifecycle-methods`} component={LifecycleMethods} />
            <Route exact path={`${props.match.path}/looping-and-conditional`} component={LoopingAndConditional} />
            <Route exact path={`${props.match.path}/datatable`} component={Datatable} />
            <Route exact path={`${props.match.path}/form`} component={Form} />
            {/* State */}
            <Route exact path={`${props.match.path}/state/local`} component={Local} />
            <Route exact path={`${props.match.path}/state/store`} component={Store} />
            <Route exact path={`${props.match.path}/state/async-local`} component={AsyncLocal} />
            <Route exact path={`${props.match.path}/state/async-store`} component={AsyncStore} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Examples
