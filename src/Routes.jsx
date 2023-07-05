import {Suspense} from 'react';
import loadable from '@loadable/component';
import {
    Routes,
    Route,
  } from "react-router-dom";

///////////////////
// Pages
////////////////

const Home = loadable(() => import('./page/Home'));

////////////////
// Routes
////////////////

const MyRoutes = () => {
    return (
        <Routes>
          <Route exact path="/" element={<Suspense fallback={null}><Home /></Suspense>} />
        </Routes>
    )
}

export default MyRoutes;