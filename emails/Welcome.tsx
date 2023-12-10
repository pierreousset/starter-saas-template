// DEMO Example email: https://demo.react.email/preview/vercel-invite-user?view=source
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Button,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const Email = ({ name }: any) => {
  const previewText = `Join ${name} on Starter-SaaS`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: '#007291',
              },
            },
          },
        }}
      >
        <Body className='align-items: center; flex flex-col bg-white'>
          <Container className='mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]'>
            <Section className='mt-[32px]'>
              <Img
                src='https://www.starter-saas.com/_next/image?url=%2Fstarter-saas.png&w=128&q=75'
                width='100'
                height='100'
                alt='Starter-saas Logo'
                className='mx-auto my-0'
              />
            </Section>
            <Heading className='mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black'>
              Hello <strong>{name}</strong>
            </Heading>
            <Section className='text-center'>
              <Button
                className='block rounded bg-[#2563EB] p-5 text-center text-base text-white no-underline'
                href='https://starter-saas.com'
              >
                Get started
              </Button>
            </Section>
            <Text className='text-base leading-6'>
              Best,
              <br />
              The Starter-SaaS team
            </Text>
            <Hr className='my-5 border-gray-300' />
            <Text className='text-xs text-gray-500'>Paris, FR 🇫🇷</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
