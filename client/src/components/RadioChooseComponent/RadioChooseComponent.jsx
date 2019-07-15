// @flow

import React from 'react';
import {
  Form, FormGroup, Label, Input, Container,
} from 'reactstrap';

// STYLES
import './RadioChooseComponent.scss';

type Props = {
  handleRadioButton: (event: Event) => void,
}

const RadioChooseComponent = ({ handleRadioButton }:Props) => (
  <Container className="radio-form">
    <div className="row justify-content-center text-center">
      <Form inline>
        <FormGroup className="row justify-content-center">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" data-duration="week" onClick={event => handleRadioButton(event)} />
              {' '}
              Week
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" data-duration="month" onClick={event => handleRadioButton(event)} />
              {' '}
              Month
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" data-duration="year" onClick={event => handleRadioButton(event)} />
              {' '}
              Year
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    </div>
  </Container>
);

export default RadioChooseComponent;
