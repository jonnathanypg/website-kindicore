import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, institucion, mensaje } = body;

    // Check required fields
    if (!nombre || !email || !telefono || !institucion) {
      return NextResponse.json(
        { type: 'danger', message: 'Por favor, complete todos los campos obligatorios.' },
        { status: 400 }
      );
    }

    const sendTo = process.env.CONTACT_RECEIVER_EMAIL || 'jonnathanp@weblifetech.com';

    // Configure Nodemailer transporter if SMTP env vars exist, or simulate email delivery log
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${nombre}" <${email}>`,
        to: sendTo,
        subject: `Nuevo Lead KindiCore: ${nombre} - ${institucion}`,
        text: `Nuevo contacto desde la web KindiCore AI:\n\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nInstitución: ${institucion}\n\nMensaje: ${mensaje || 'N/A'}`,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Log lead submission in server output
      console.log(' [KindiCore Lead Received]:', {
        nombre,
        email,
        telefono,
        institucion,
        mensaje,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      type: 'success',
      message: 'Solicitud enviada con éxito. Muchas gracias, nos pondremos en contacto muy pronto.',
    });
  } catch (error: any) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      {
        type: 'danger',
        message: 'Ocurrió un error al procesar el formulario. Por favor intente más tarde.',
      },
      { status: 500 }
    );
  }
}
