import PropTypes from 'prop-types';

const GlobalTitle = ({title}) => {
  return (
    <h1>{title}</h1>
  );
}

GlobalTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default GlobalTitle;