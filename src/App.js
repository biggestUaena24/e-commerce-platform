import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>This is a shop page</h1>} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
