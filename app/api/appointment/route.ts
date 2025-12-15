import { NextResponse } from "next/server";
import { appointmentFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = appointmentFormSchema.parse(body);

    // Simulate database/email operation
    console.log("Appointment request:", validatedData);

    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Appointment request received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment form error:", error);
    return NextResponse.json(
      { message: "Invalid request data" },
      { status: 400 }
    );
  }
}
