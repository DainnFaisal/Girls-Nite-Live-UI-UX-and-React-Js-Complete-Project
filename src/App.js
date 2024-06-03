import Navbar from './components/Navbar';
import dainhome from './pages/dainhome';
import dainabout from './pages/dainabout';
import dainblog from './pages/dainblog';
import dainEvents from './pages/dainEvents';
import dainmarketplace from './pages/dainmarketplace';
import dainvideos from './pages/dainvideos';
import dainWorkwithGNL from './pages/dainWorkwithGNL';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GNLfooter from './components/GNLfooter';
import EventsListView from './components/EventsListView';
import EventsCalenderView from './components/EventsCalenderView';
import AboutThisEvent from './components/AboutThisEvent';
import MarketPlaceDetail from './components/MarketPlaceDetail';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import contact from './components/contact';
import TermsOfUse from './components/TermsOfUse';
import FAQ from './components/FAQ';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/dainhome' exact Component={dainhome} />
          <Route path='/About' exact Component={dainabout} />
          <Route path='/dainBlog' exact Component={dainblog} />
          <Route path='/dainEvents' exact Component={dainEvents} />
          <Route path='/dainMarketplace' exact Component={dainmarketplace} />
          <Route path='/dainVideos' exact Component={dainvideos} />
          <Route path='/dainWorkwithGNL' exact Component={dainWorkwithGNL} />
          <Route path='/EventsListView' exact Component={EventsListView} />
          <Route path='/EventsCalenderView' exact Component={EventsCalenderView} />
          <Route path='/Day2' exact Component={Day2} />
          <Route path='/Day3' exact Component={Day3} />
          <Route path='/Day4' exact Component={Day4} />
          <Route path='/AboutThisEvent' exact Component={AboutThisEvent} />
          <Route path='/MarketPlaceDetail' exact Component={MarketPlaceDetail} />
          <Route path='/Contact' exact Component={contact} />
          <Route path='/TermsOfUse' exact Component={TermsOfUse} />
          <Route path='/FAQ' exact Component={FAQ} />
        </Routes>
        <GNLfooter />
      </Router>

    </div>
  );
}

export default App;
