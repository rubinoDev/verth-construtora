import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

const resend = new Resend('re_K3bcK91A_Pr7XctPgUyb8GrWvBBkhSnmJ');

export async function POST(req: NextApiRequest) {
  console.log(req, 'reqqqqqq');
  try {
    const aaaa = await req.json();
    const { firstName } = req.body;
    console.log(firstName, 'firstNameeee');

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['rubinodev@gmail.com'],
      subject: 'Hello World',
      react: EmailTemplate({ firstName })
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error, 'sdkfopsakdopf');
    return NextResponse.json({}, { status: 500 });
  }
}
