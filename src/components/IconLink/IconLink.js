import PropTypes from 'prop-types';
import { Link, Icon } from './styles';

function IconLink({ url, icon, name }) {
  return (
    <Link href={ url } target="_blank">
      <Icon src={ icon } alt={ name } />
    </Link>
  );
}

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IconLink;
