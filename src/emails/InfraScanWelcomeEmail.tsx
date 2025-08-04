import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

interface InfraScanWelcomeEmailProps {
  name: string;
  message?: string;
  steps: {
    id: number;
    Description: React.ReactNode;
  }[];
  links: {
    title: string;
    href: string;
  }[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const InfraScanWelcomeEmail = ({
  name,
  message,
  steps,
  links,
}: InfraScanWelcomeEmailProps) => {
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
        <Preview>Welcome to InfraScan - Infrastructure Inspection Revolution</Preview>
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
              Welcome to InfraScan
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Hello {name}! Congratulations on joining the InfraScan early access waitlist. 
                  You&apos;re now part of a select group of professionals who will revolutionize 
                  infrastructure inspection with AI-powered crack detection technology.
                </Text>

                <Text className="text-base">
                  Here&apos;s what you can expect as we prepare for our Q2 2026 launch:
                </Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            {message && (
              <Section className="mt-20">
                <Row>
                  <Text className="text-base">
                    <strong>Your Message:</strong><br />
                    &quot;{message}&quot;
                  </Text>
                </Row>
              </Section>
            )}

            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Visit InfraScan Website
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link.title}>
                    <Link
                      className="font-bold text-black underline"
                      href={link.href}
                    >
                      {link.title}
                    </Link>{' '}
                    <span className="text-green-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="px-20 text-right">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              InfraScan - Transforming Infrastructure Inspection with AI
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InfraScanWelcomeEmail.PreviewProps = {
  name: 'John Doe',
  message: 'I&apos;m interested in learning more about your AI-powered inspection technology.',
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Early Access Priority.</strong>{' '}
          You&apos;ll be among the first to access our AI-powered inspection platform when we launch in Q2 2026.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Exclusive Updates.</strong> Receive insider information about new features, 
          capabilities, and industry insights before anyone else.{' '}
          <Link>Learn about our technology</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Demo Access.</strong> Get priority access to live demonstrations and 
          hands-on experience with our crack detection technology.{' '}
          <Link>Schedule a demo</Link>.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-20" key={4}>
          <strong>Partnership Opportunities.</strong> Be the first to know about 
          partnership programs and early adopter benefits.{' '}
          <Link>Explore partnerships</Link>.
        </li>
      ),
    },
  ],
  links: [
    {
      title: 'Visit our website',
      href: 'https://infrascan.com',
    },
    { title: 'Learn about our technology', href: 'https://infrascan.com/about' },
    { title: 'Contact our team', href: 'https://infrascan.com/contact' },
  ],
} satisfies InfraScanWelcomeEmailProps;

export default InfraScanWelcomeEmail; 