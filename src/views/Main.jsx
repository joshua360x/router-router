import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Detail from './Detail'
import Food from './Food'


export default function Main() {

  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Food />
        </Route>
        
        <Route exact path='/food/:id'>
          <Detail />
        </Route>
        
      </Switch>
    </main>
  )
}
