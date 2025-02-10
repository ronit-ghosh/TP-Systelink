import z from "zod"

export const userValidation = z.object({
    email: z.string().email({ message: "This is not a valid Email!" }),
    password: z.string().min(8, { message: "Password must be between 8 and 16 characters long!" }).max(30, { message: "Password must be between 8 and 16 characters long!" }),
})

export const contactDataValidation = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long!" }),
    email: z.string().email({ message: "This is not a valid Email!" }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 characters long!" }).max(10, { message: "Phone number must be at least 10 characters long!" }),
    service: z.string().min(2, { message: "This Service is not available!" }),
    message: z.string().min(10, { message: "Message must be at least 10export  characters long!" }).optional(),
})