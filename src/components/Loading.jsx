import PropTypes from 'prop-types';
import { Audio } from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      (
      <Audio
        className="true"
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      )
    </>
  );
};

Loading.propTypes = {
  moviesData: PropTypes.array.isRequired,
};

export default Loading;
