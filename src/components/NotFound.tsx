import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-4 mb-4">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-danger" />
          <span className="ml-2">ERROR</span>
        </h1>
        <h1 className="display-1 mb-4">404</h1>
        <div className="mb-4">
          <span className="h4 d-inline-block px-3 py-1 rounded">Page Not Found</span>
        </div>
        <p className="lead mb-4">Looks like something went wrong. We&apos;re working on it.</p>
        <a href="/" className="btn btn-outline-dark">
          Go to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
