import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface InfraScanNotificationEmailProps {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const InfraScanNotificationEmail = ({
  name,
  email,
  message,
  timestamp,
}: InfraScanNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: '#667eea',
                brandDark: '#764ba2',
                offwhite: '#fafbfb',
                primary: '#667eea',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Preview>New InfraScan Early Access Request - {name}</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/images/logo/logo.svg`}
            width="200"
            height="60"
            alt="InfraScan"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8 text-brand">
              New Early Access Request
            </Heading>

            <Section>
              <Text className="text-base">
                Someone has joined the InfraScan early access waitlist. Here are the details:
              </Text>
            </Section>

            <Section className="bg-gray-50 p-20 rounded-lg">
              <Text className="text-base">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-base">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-base">
                <strong>Message:</strong>
              </Text>
              <Text className="text-base bg-white p-15 rounded border-l-4 border-brand">
                &quot;{message}&quot;
              </Text>
              <Text className="text-base">
                <strong>Timestamp:</strong> {timestamp}
              </Text>
            </Section>

            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                View in Dashboard
              </Button>
            </Section>

            <Section>
              <Text className="text-base">
                This person should be added to your CRM system and contacted for follow-up.
              </Text>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="mb-45 text-center text-gray-400">
              InfraScan - Transforming Infrastructure Inspection with AI
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InfraScanNotificationEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'I\'m interested in learning more about your AI-powered inspection technology and would like to schedule a demo.',
  timestamp: new Date().toLocaleString(),
} satisfies InfraScanNotificationEmailProps;

export default InfraScanNotificationEmail; 