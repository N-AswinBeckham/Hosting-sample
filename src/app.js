import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
// import RouteChangeTracker from "./components/RouteChangeTracker";

// import ReactGA from "react-ga";
// const TRACKING_ID = "G-DWRG7G8R03"; // YOUR_OWN_TRACKING_ID ReactGA.initialize(TRACKING_ID);
// ReactGA.initialize(TRACKING_ID);

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route>
      </Routes>
      <Footer />
      {/* <RouteChangeTracker /> */}
    </Router>
  );
};

export default App;
