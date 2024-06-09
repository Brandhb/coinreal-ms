import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactUsEmailProps {
  name: string;
  senderEmail: string;
  message: string;
}

export const ContactUsEmail: React.FC<Readonly<ContactUsEmailProps>> = ({
  name,
  senderEmail,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Contact Us Form Submission</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            {/* <Img src={`/static/ways2coin-logo.png`} />*/}
          </Section>

          <Section style={content}>
            {/*<Row>
              
              <Img
                style={image}
                width={620}
                src={`/static/contact-us-header.png`}
              />
              
            </Row>*/}

            <Section style={boxInfos}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Hello {name}!
              </Text>
              <Text style={paragraph}>
                Thank you for reaching out to the Ways2Coin support team. We
                have received your message and will get back to you as soon as
                possible.
              </Text>
              <Text style={paragraph}>
                Our team is dedicated to providing you with the best assistance
                for all your inquiries and concerns.
              </Text>
            </Section>
          </Section>

          <Section style={containerImageFooter}>
            {/*
           <Img
              style={image}
              width={620}
              src={`/static/contact-us-footer.png`}
            />
           */}
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
              marginTop: 20,
            }}
          >
            © {new Date().getFullYear()} Ways2Coin
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export const ContactUsEmailtoSupport: React.FC<
  Readonly<ContactUsEmailProps>
> = ({ name, senderEmail, message }) => {
  return (
    <Html>
      <Head />
      <Preview>Contact Us Form Submission - from: {senderEmail}</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            {/* 
           <Img src={`/static/ways2coin-logo.png`} /> 
           */}
          </Section>

          <Section style={content}>
            {/*<Row>
              
              
              <Img
                style={image}
                width={620}
                src={`/static/contact-us-header.png`}
              />
            </Row>*/}

            <Section style={boxInfos}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Hello, my name is {name}!
              </Text>
              <Text style={paragraph}>
                I have reached you for this reason:
                {message}
              </Text>
            </Section>
          </Section>

          <Section style={containerImageFooter}>
            {/* <Img
              style={image}
              width={620}
              src={`/static/contact-us-footer.png`}
            />*/}
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
              marginTop: 20,
            }}
          >
            © {new Date().getFullYear()} Ways2Coin
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
