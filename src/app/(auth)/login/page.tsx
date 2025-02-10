import { LoginForm } from "@/components/login-form"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const page = async () => {

  const isLoggedIn = await getServerSession()

  if (isLoggedIn) {
    return redirect("/admin")
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted/30 p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

export default page
