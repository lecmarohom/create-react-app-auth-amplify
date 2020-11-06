import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap'

export default function Welcome() {
  return (
    <React.Fragment>
      <section className="section auth">
        <div className="container">
          <h1>Welcome!</h1>
          <p>We have sent you an email. Please click the 'Verify Email' to validate your account. Thank you!</p>
        </div>
      </section>

      <Card>
      <Link to="/signIn" className="card-link text-center"> Go to Sign Page</Link>.
      </Card>
    </React.Fragment>
    
  )
}
