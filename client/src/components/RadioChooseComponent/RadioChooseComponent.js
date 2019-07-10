import React from 'react';
import { Form, FormGroup, Label, Input, Container } from 'reactstrap';

import './RadioChooseComponent.scss';

export default class Example extends React.Component {
  render() {
    return (
      <Container className="radio-form">
        <div className="row justify-content-center text-center">
          <Form inline>
            <FormGroup className="row justify-content-center">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Line Chart
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Radial Chart
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Mixed Chart
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
        </div>
      </Container>
    );
  }
}