import {
  ImageContainer,
  About,
  TechpanionText,
  Para,
  Image,
} from "./styledCompopnents";

const ImageSection = () => (
  <ImageContainer>
    <Image
      src="https://cdn-images-1.medium.com/max/728/1*TckVtbafrzinF10TWMN5-w@2x.png"
      alt="logo"
    />
    <About>ABOUT</About>
    <TechpanionText>Techpanion Solutions</TechpanionText>
    <Para>
      We are the Technology companion for the digital transformation journey of
      organisations to transform from essential to evolved states. Through
      innovative solution design, technical skills, commercial acumen and
      industry expertise, we deliver horizontal and vertical automation so
    </Para>
  </ImageContainer>
);

export default ImageSection;
