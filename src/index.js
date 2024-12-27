import React from "react";
import ReactDOM from 'react-dom/client' ;
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Layout from "./page/layout";
import Home from "./page/home";
import Contact from "./page/contact";
import Blog from "./page/blog";
import NoPage from "./page/noPage";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route basename="/" path="/" element={<Layout />} >
          <Route basename="reactAppTest/" index element={<Home />} />
          <Route basename="reactAppTest/contact" path="contact" element={<Contact />} />
          <Route basename="reactAppTest/blog" path="blog" element={<Blog />} />
          <Route basename="*" path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App />)