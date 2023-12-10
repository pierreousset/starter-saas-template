import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
// import EmailProvider from 'next-auth/providers/email';
// import GitHubProvider from 'next-auth/providers/github';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

import { loginSchema } from './validation/auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_PASS ?? "",
    //   profile(profile) {
    //     return {
    //       id: profile.id.toString(),
    //       name: profile.name || profile.login,
    //       gh_username: profile.login,
    //       email: profile.email,
    //       image: profile.avatar_url,
    //     };
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const creds = await loginSchema.parseAsync(credentials);

        const user = await prisma.user.findFirst({
          where: { email: creds.email },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          creds.password,
          user.password as any
        );

        if (!passwordMatch) {
          throw new Error(JSON.stringify([{ message: 'Password not good!' }]));
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        // return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  // jwt: {
  //   signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  // }
  // adapter: SupabaseAdapter({
  //   url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  //   secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  // }),
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email as any,
        },
      });

      if (!dbUser) {
        if (user) {
          // eslint-disable-next-line no-param-reassign
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
    async session({ session, token }: any) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          id: token.id,
        },
      };
    },
    //   console.log({ user, account, profile });
    //   console.log('provider:', account?.provider);
    //   if (!user.email) {
    //     return false;
    //   }

    //   if (account?.provider === 'google') {
    //     const userExists = await prisma.user.findUnique({
    //       where: { email: user.email },
    //       select: { name: true },
    //     });
    //     console.log('userExists', userExists);
    //     // if the user already exists via email,
    //     // update the user with their name and image from Google
    //     if (userExists && !userExists.name) {
    //       await prisma.user.update({
    //         where: { email: user.email },
    //         data: {
    //           name: profile?.name,
    //           // @ts-ignore - this is a bug in the types, `picture` is a valid on the `Profile` type
    //           image: profile?.picture,
    //         },
    //       });
    //     } else {
    //       console.log(user.email);
    //       sendEmail(user.email);
    //     }
    //   }
    //   return true;
    // },
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return `${baseUrl}/dashboard`;
      return baseUrl;
    },
  },
};
