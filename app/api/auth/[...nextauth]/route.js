import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credential: {},

      async authorize(credentials) {
        const user = { id: "1" };
        return user;
      },
    }),
  ],
  session: {
    stretegy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  page: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
