import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handelSetValueTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handelSetValueBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body
    };

    axios
      .post(`http://5dccfe88d795470014e4ca93.mockapi.io/test`, data)
      .then(res => {
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">title</Label>
          <Input
            type="text"
            className="title"
            value={this.state.title}
            onChange={this.handelSetValueTitle}
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="text"
            className="body"
            value={this.state.body}
            onChange={this.handelSetValueBody}
            placeholder="body placeholder"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default Add;
