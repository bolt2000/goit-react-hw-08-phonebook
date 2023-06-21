
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import { observer } from 'mobx-react-lite';
// import Book from './Navigation/Book/Book';


// const PrivateRoute = (routeProps) => {

// const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//   <Route {...routeProps}>
//     {isLoggedIn ? <Navigate to="/book" /> : <Navigate to="/login" />}
//   </Route>

//   )
// };

// export default PrivateRoute;

function PrivateRoute({ children, fallbackRoute = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <>
          <Navigate to={fallbackRoute} replace={true}/>
        </>
      )}
    </>
  );
}

export default PrivateRoute


