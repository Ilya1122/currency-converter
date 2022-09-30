import { useNavigate } from "react-router";
import { ROUTE_PATH } from "routes/route-path";

interface HookReturnType {
  redirectToMainPage: () => void;
}

export const useRoutes = (): HookReturnType => {
  const navigate = useNavigate();

  const redirectToMainPage = (): void => navigate(ROUTE_PATH.MAIN);

  return {
    redirectToMainPage,
  };
};
