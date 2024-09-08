import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "../components/MainNavigation";

export default function Error() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <PageContent title={JSON.parse(error.data).message} />;
    </>
  );
}
