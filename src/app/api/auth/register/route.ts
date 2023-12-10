import { hash } from 'bcrypt';
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import resend from '@/lib/resend';
import Welcome from '../../../../../emails/Welcome';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const userExists = await prisma.user.findUnique({
      where: { email },
      select: {
        name: true,
        email: true,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: 'A user with the same email already exists!',
          userExists: true,
        },
        {
          status: 409,
        }
      );
    }

    const hashedPassword = await hash(password, 10);

    const userCreate = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (userCreate) {
      await resend.emails.send({
        from: 'Starter-Saas <hello@starter-saas.com>',
        to: [email],
        subject: `Welcome ${name}`,
        react: Welcome({ name }),
      });
    }

    return NextResponse.json(
      { message: 'User creates successfully', body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Something went wrong!, ${error}` },
      { status: 500 }
    );
  }
}
