import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Welcome to Todo Spring Boot</h5>
              <p className="text-center">Your best place to manage daily tasks effectively and efficiently.</p>
              {/* You can add more details here about the app in similar structure */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
