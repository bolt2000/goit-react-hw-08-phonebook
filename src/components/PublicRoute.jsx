
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
// import css from '../Layout.module.css';



// function PrivateRoute({children, ...routeProps}) {
//   console.log(routeProps);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (

//        <Route {...routeProps}>
//       {isLoggedIn ? children : <Navigate to="/home" />}
//       </Route>

//   );

// }



function PrivateRoute({ children, fallbackRoute = '/' }) {
  console.log((fallbackRoute = '/'));
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <>
          <Navigate
            to={fallbackRoute}
            /*state={ {from: location} } */ replace={true}
          />
          {/* {showRedirectNote()} */}
        </>
      )}
    </>
  );
}

export default PrivateRoute


