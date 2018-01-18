import React, { Component } from 'react'

export class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: props.match.params.id
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState((prev, props) => {
      return { [name]: value };
    }, () => {
      console.log(this.state);
    });
  }

  handleSubmit() {
    this.props.history.push("/settings");
  }

  render() {
    return (
      <form>
        <div className="form-check">
          <input
            className="form-check-input" id="isGoing"
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
          <label className="form-check-label" htmlFor="isGoing">Is Going:</label>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of guests:</label>
          <input
            className="form-control" id="numberOfGuests"
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </div>
        <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default Details
