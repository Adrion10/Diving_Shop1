import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screen/HomeScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Diving Shop</h1>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
