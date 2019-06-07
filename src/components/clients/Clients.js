import React, { Component } from "react";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "234",
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kev@gmail.com",
        phone: "344-34324-3434",
        balance: "34"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users"> Clients</i>
              </h2>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
