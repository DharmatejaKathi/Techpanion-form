import { Component } from "react";

import { v4 as uuid } from "uuid";

import ImageSection from "../ImageSection";
import ApproveSection from "../ApproveSection";
import InvoiceDetails from "../InvoiceDetails";
import {
  MainContainer,
  FormSection,
  Input,
  InputContainer,
  Label,
  FormTitle,
  WrapContainer,
  Container,
} from "./styledComponents";

class Form extends Component {
  state = {
    payee_1: "",
    payee_2: "",
    city: "",
    street: "",
    country: "",
    bankKey: "",
    bankAc: "",
    payeeDetails: [],
  };

  onChangePayee1 = (event) => {
    this.setState({ payee_1: event.target.value });
  };

  onChangePayee2 = (event) => {
    this.setState({ payee_2: event.target.value });
  };

  onChangeCity = (event) => {
    this.setState({ city: event.target.value });
  };

  onChangeStreet = (event) => {
    this.setState({ street: event.target.value });
  };

  onChangeCountry = (event) => {
    this.setState({ country: event.target.value });
  };

  onChangeBankKey = (event) => {
    this.setState({ bankKey: event.target.value });
  };

  onChangeBankAc = (event) => {
    this.setState({ bankAc: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
    const {
      payee_1,
      payee_2,
      city,
      street,
      country,
      bankKey,
      bankAc,
    } = this.state;
    const newDetails = {
      id: uuid(),
      payee_1: payee_1,
      payee_2: payee_2,
      city: city,
      street: street,
      country: country,
      bankKey: bankKey,
      bankAc: bankAc,
    };
    this.setState((prevState) => ({
      payeeDetails: [...prevState.payeeDetails, newDetails],
      payee_1: "",
      payee_2: "",
      city: "",
      street: "",
      country: "",
      bankKey: "",
      bankAc: "",
    }));
  };

  renderForm = () => {
    const {
      payee_1,
      payee_2,
      city,
      street,
      country,
      bankAc,
      bankKey,
    } = this.state;
    return (
      <FormSection>
        <FormTitle>ALTERNATE PAYEE DETAILS</FormTitle>
        <InputContainer>
          <Label htmlFor="alternate-payee1">Alternate Payee 1: </Label>
          <Input
            type="text"
            id="alternate-payee1"
            onChange={this.onChangePayee1}
            value={payee_1}
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="alternate-payee1">Alternate Payee 2: </Label>
          <Input
            type="text"
            id="alternate-payee2"
            onChange={this.onChangePayee2}
            value={payee_2}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="City">City: </Label>
          <Input
            type="text"
            id="City"
            onChange={this.onChangeCity}
            value={city}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="Street">Street: </Label>
          <Input
            type="text"
            id="Street"
            onChange={this.onChangeStreet}
            value={street}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="Country">Country: </Label>
          <Input
            type="text"
            id="Country"
            onChange={this.onChangeCountry}
            value={country}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="ifsc">Bank key / IFSC code: </Label>
          <Input
            type="text"
            id="ifsc"
            onChange={this.onChangeBankKey}
            value={bankKey}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="acc">Bank acc no: </Label>
          <Input
            type="text"
            id="acc"
            onChange={this.onChangeBankAc}
            value={bankAc}
          />
        </InputContainer>
        <button type="button" onClick={this.submitForm}>
          Submit
        </button>
      </FormSection>
    );
  };

  render() {
    const { payeeDetails } = this.state;
    return (
      <Container>
        <MainContainer>
          <ImageSection />
          <WrapContainer>
            <InvoiceDetails />
            {this.renderForm()}
          </WrapContainer>
        </MainContainer>
        <ApproveSection payeeDetails={payeeDetails} />
      </Container>
    );
  }
}

export default Form;
