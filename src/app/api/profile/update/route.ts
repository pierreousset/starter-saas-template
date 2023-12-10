import { getServerSession } from 'next-auth/next';
import { z } from 'zod';
import db from '@/lib/prisma';
import { NextResponse } from 'next/server';

import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;
    const session = await getServerSession(authOptions);

    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 });
    }

    await db.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(
      { message: 'Modification successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: JSON.stringify(error.issues) },
        { status: 422 }
      );
    }

    return new NextResponse(null, { status: 500 });
  }
}
