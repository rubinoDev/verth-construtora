import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_K3bcK91A_Pr7XctPgUyb8GrWvBBkhSnmJ');

export async function POST(req: Request) {
  try {
    const { firstName } = await req.json();

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rubinodev@gmail.com'],
      subject: 'Hello World',
      react: EmailTemplate({ firstName })
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
