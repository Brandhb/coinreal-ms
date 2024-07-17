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

interface EmailProps {
  name: string;
  senderEmail: string;
  reason?: string;
  message: string;
}

export const ContactUsEmail: React.FC<EmailProps> = ({ name, senderEmail, message }) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text className="font-bold text-center text-lg mb-4">Hello {name}!</Text>
            <Text className="text-center mb-4">
              Thank you for reaching out to the Coin-realms support team. We have received your message
              and will get back to you as soon as possible.
            </Text>
            <Text className="text-center">
              Our team is dedicated to providing you with the best assistance for all your inquiries
              and concerns.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export const ContactUsEmailtoSupport: React.FC<EmailProps> = ({ name, senderEmail, message }) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text className="font-bold text-center text-lg mb-4">Hello, my name is {name}!</Text>
            <Text className="text-center">
              I have reached you for this reason: {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export const VerificationEmail: React.FC<EmailProps> = ({ name, reason, senderEmail, message }) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Text className="font-bold text-center text-lg mb-4">Hello, my name is {name}!</Text>
            <Text className="text-center">
              I have reached you for this reason: {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};


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
