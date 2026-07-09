"use client"
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";
import {
    AuthLoading,
    Authenticated,

    ConvexReactClient,
} from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk";


interface ConvexClientProviderProps {
    children: React.ReactNode

}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl)


export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Authenticated>
                    {children}
                </Authenticated>

                <AuthLoading>
                    <div className="flex flex-col items-center justify-center min-h-screen w-full">
                        Loading...
                    </div>
                </AuthLoading>

            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}
