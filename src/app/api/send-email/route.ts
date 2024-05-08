import { NextResponse } from "next/server"; 
import { Resend } from 'resend'

export async function GET() {
    return NextResponse.json({ message: 'OK' }, { status: 200 })
}