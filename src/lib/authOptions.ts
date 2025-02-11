import { prisma } from "@/lib/db";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'text', placeholder: 'Enter your email' },
                password: { label: 'Password', type: 'password', placeholder: 'Enter Your Password' },
            },
            async authorize(creds: Record<"email" | "password", string> | undefined) {
                if (!creds || !creds.email || !creds.password) return null

                const email = creds.email
                const password = creds.password

                try {
                    const user = await prisma.admin.findFirst({ where: { email } })

                    if (!user) return null

                    if (user.password !== password) return null

                    return {
                        id: user.id
                    }
                } catch (error) {
                    console.error(error)
                    return null
                }
            },
        })
    ],
    callbacks: {

    },
    pages: { signIn: '/login' },
    secret: process.env.NEXTAUTH_SECRET
}