import { UlContainer, ListItems, Span, BasicAmt } from "./styledComponents";

const inVoiceData = {
  Currency: "INR",
  InvBasicAmt: 1500.0,
  InvTaxAmt: 1000.0,
  TotalInvAmt: 1600.0,
  TDSAmt: 15.0,
  netPayable: 1600.0,
  BasicAmtDiff: "NA",
};

const ApproveSection = () => {
  return (
    <UlContainer>
      <ListItems>
        Currency : <Span>{inVoiceData.Currency}</Span>
      </ListItems>
      <ListItems>
        Inv Basic Amt : <Span>{inVoiceData.InvBasicAmt}</Span>
      </ListItems>
      <ListItems>
        Basic Tax Amt : <Span>{inVoiceData.InvTaxAmt}</Span>
      </ListItems>
      <ListItems>
        Inv Total Amt : <Span>{inVoiceData.TotalInvAmt}</Span>
      </ListItems>
      <ListItems>
        TDS Amt : <Span>{inVoiceData.TDSAmt}</Span>
      </ListItems>
      <ListItems>
        Net Payable Amt : <Span>{inVoiceData.Currency}</Span>
      </ListItems>
      <ListItems>
        Basic Amt Diff : <BasicAmt>{inVoiceData.BasicAmtDiff}</BasicAmt>
      </ListItems>
    </UlContainer>
  );
};

export default ApproveSection;
