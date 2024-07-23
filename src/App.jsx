import { useDispatch } from "react-redux";
import AppRoutes from "./routes/AppRoutes";
import { getFAQService } from "./assets/salonSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const data = async () => {
    try {
      const response = await fetch(`https://testingnil1.ru/assets/output.json`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data());
  useEffect(() => {
    dispatch(getFAQService());
  }, [dispatch]);
  return <AppRoutes />;
}

export default App;
