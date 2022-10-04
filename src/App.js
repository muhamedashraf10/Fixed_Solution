import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts/Posts";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer/Footer";
import ButtonToScrollUp from "./components/ButtonToScrollUp/ButtonToScrollUp";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="post/:id" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ButtonToScrollUp />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
