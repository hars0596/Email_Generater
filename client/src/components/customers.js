import React, { Component } from "react";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }
  componentDidMount() {
    fetch("/api/user")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () => console.log("customers ", customers))
      );
  }
  render() {
    return (
      <div>
        <h2>Customers list</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              Name:{customer.Name}
              Designation{customer.Designation}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
