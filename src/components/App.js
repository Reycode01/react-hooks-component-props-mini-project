import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import logo from "../assets/logo";

console.log(blogData);

function App() {
  const aboutText = blogData.about;
  return (
    <div className="App">
      <Header name={"Overreacted"} />
      <About about={aboutText} image={logo} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
