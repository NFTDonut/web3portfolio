import React, { useState, useEffect, useLayoutEffect } from 'react';
import './styles.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"
import Aos from 'aos';
import "aos/dist/aos.css";

const StyledApp = styled.div`
`

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    localStorage.setItem('theme', theme);
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  useLayoutEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme("dark");
    }
  })

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar toggleTheme={toggleTheme}/>
        <About />
        <Skills />
        <Projects />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
