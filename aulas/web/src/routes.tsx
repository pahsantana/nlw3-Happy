import React from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanadesMap from './pages/OrphanadesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanadesMap}/>

                <Route path="/orphanages/create" exact component={CreateOrphanage}/>
                <Route path="/orphanages/:id" component={Orphanage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;