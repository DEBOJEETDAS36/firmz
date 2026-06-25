// app/api/leads/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Lead from "@/lib/models/Lead";
import { getSession } from "@/lib/session";

export async function GET() {
  try {
    // Protect the route — only admin can access
    const session = await getSession();
    if (!session.isAdmin) {
      return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
    }

    await connectDB();

    // Newest leads first
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({ leads });
  } catch (err) {
    console.error("Leads fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}