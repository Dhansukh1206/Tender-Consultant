import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Dummy user for demo (replace with your DB)
const users = [
  { id: 1, name: "Dhansukh", email: "dhansukh@example.com", password: "password123" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "dhansukh@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET || "your-secret-key", // Change this in production!
  },
  pages: {
    signIn: "/auth/signin", // custom signin page route (optional)
  },
};

export default NextAuth(authOptions);
