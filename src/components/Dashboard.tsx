import { useParams } from 'react-router-dom';
import React from 'react';

const Dashboard: React.FC = () => {
  const { username } = useParams();
  console.log(username);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white text-center">
              <h1>Welcome {username}</h1>
            </div>
            <div className="card-body">{/* You can add more content here later */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
