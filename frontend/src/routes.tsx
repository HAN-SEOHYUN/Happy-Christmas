import HomePage from "./pages/HomePage";
import DetailMessage from "./pages/DetailMessage";
import CreateMessage from "./pages/CreateMessage";
import NotFoundPage from "./pages/NotFoundPage";

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/detail",
    component: DetailMessage,
  },
  {
    path: "/register",
    component: CreateMessage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routes;
