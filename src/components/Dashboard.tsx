import { useParams } from 'react-router-dom';
import TodoContainer from './TodoContainer';
import React from 'react';

const Dashboard: React.FC = () => {
  const { username } = useParams();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h1>Welcome {username}</h1>
            </div>
            <div className="card-body">
              <TodoContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
