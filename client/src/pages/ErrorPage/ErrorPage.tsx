import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
         {isRouteErrorResponse(error) &&  <i>{error.statusText || error.data}</i>}
        </p>
      </div>
    );
  }

export default ErrorPage;