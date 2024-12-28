import React from "react";
import ReactDOM from 'react-dom/client' ;
import { BrowserRouter as Router, Routes , Route, useNavigate } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Contact from "./page/contact";
import Blog from "./page/blog";
import NoPage from "./page/noPage";
import { useEffect } from 'react';

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

export default function App() {
  return(
    <Router basename="/reactAppTest">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="*" element={<RedirectHandler/>}/>
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