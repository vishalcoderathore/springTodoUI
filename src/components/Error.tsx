// Error.tsx

import { FC } from 'react';

interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message }) => {
  return <div className="alert alert-danger mt-3">{message}</div>;
};

export default Error;
