import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

function PublicRoute({
  children,
  fallbackRoute = '/book',
  restricted = false,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={fallbackRoute} /> : children}</>;
}
export default PublicRoute;
