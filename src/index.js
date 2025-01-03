import React from "react";
import ReactDOM from 'react-dom/client' ;
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Contact from "./page/contact";
import Blog from "./page/blog";
import NoPage from "./page/noPage";


export default function App() {
  return(
    <Router basename="/reactAppTest">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="nopage" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App />)