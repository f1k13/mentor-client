import { RouterProvider } from "react-router-dom";
import router from "@/shared/router/router.tsx";
import { MainLayout } from "@/app/layouts";
import "./styles/main.scss";
const App = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
};

export default App;
