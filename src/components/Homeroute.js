import { Switch, Route} from 'react-router-dom'
import Homepage from './Homepage';
import React from 'react'

const Homeroute = () =>(
<main>
    
    <Switch>
    <Route path='/home' component={Homepage}/>
    </Switch>
    
</main>
    
)

export default Homeroute;