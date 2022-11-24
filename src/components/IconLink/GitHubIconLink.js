import PropTypes from 'prop-types';
import IconLink from './IconLink';
import GithubIcon from '../../assets/icons/github-logo.png';
import { GITHUB_URL_BASE } from '../../data/data';

function GitHubIconLink({ path = '' }) {
  return (
    <IconLink url={ GITHUB_URL_BASE + path } icon={ GithubIcon } name="github" />
  );
}

GitHubIconLink.propTypes = {
  path: PropTypes.string.isRequired,
};

export default GitHubIconLink;
