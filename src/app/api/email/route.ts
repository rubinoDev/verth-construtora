import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { CreateEmailOptions } from 'resend/build/src/emails/interfaces';

const resend = new Resend('re_8CopfTvC_386HEGgBBjhpDch9gxM1MY66');

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    const data = await resend.emails.send({
      from: 'Test verth <onboarding@resend.dev>',
      to: ['fabioassoni06@gmail.com'],
      subject: 'Nova inscrição',
      react: EmailTemplate({ name, email, phone })
    } as CreateEmailOptions);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
