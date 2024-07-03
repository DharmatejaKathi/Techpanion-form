import { Component } from "react";

import {
  FormSection,
  FormTitle,
  ContentContainer,
  Paras,
  RadioLabel,
  Input,
  Span,
} from "./styledComponents";

const inVoiceData = {
  currency: "INR",
  InvBasicAmt: 1500.0,
  InvTaxAmt: 1000.0,
  TotalInvAmt: 1600.0,
  netPayable: 1600.0,
};

class InvoiceDetails extends Component {
  state = { currencyData: inVoiceData, advanceAmount: 0.0 };

  onChangeInput = (event) => {
    this.setState({ advanceAmount: event.target.value });
  };

  render() {
    const { currencyData, advanceAmount } = this.state;
    const {
      currency,
      InvBasicAmt,
      InvTaxAmt,
      TotalInvAmt,
      netPayable,
    } = currencyData;
    return (
      <FormSection>
        <FormTitle>INVOICE AMOUNT DETAILS</FormTitle>
        <ContentContainer>
          <Paras>
            Currency <Span>*</Span> :
          </Paras>
          <p>{currency}</p>
        </ContentContainer>
        <ContentContainer>
          <Paras>
            Inv Basic Amt <Span>*</Span> :
          </Paras>
          <p>{InvBasicAmt}</p>
        </ContentContainer>
        <ContentContainer>
          <Paras>
            Inv Tax Amt <Span>*</Span> :
          </Paras>
          <p>{InvTaxAmt}</p>
        </ContentContainer>
        <ContentContainer>
          <Paras>
            Total Inv Amt [inclu. of tax] <Span>*</Span> :
          </Paras>
          <p>{TotalInvAmt}</p>
        </ContentContainer>
        <ContentContainer>
          <Paras>
            Advance Paid <Span>*</Span> :
          </Paras>
          <Input
            type="text"
            onChange={this.onChangeInput}
            value={advanceAmount}
          />
        </ContentContainer>
        <ContentContainer>
          <Paras>
            TCS Application <Span>*</Span> :
          </Paras>
          <div>
            <input type="radio" id="option1" name="option" />
            <RadioLabel htmlFor="option1">Yes</RadioLabel>
            <input type="radio" id="option2" name="option" checked />
            <RadioLabel htmlFor="option2">No</RadioLabel>
          </div>
        </ContentContainer>
        <ContentContainer>
          <Paras>
            Net Payable Amt [Exclu. of TDS] <span>*</span> :
          </Paras>
          <p>{netPayable}</p>
        </ContentContainer>
      </FormSection>
    );
  }
}

export default InvoiceDetails;
