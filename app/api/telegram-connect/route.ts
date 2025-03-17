import type {NextRequest, NextResponse} from 'next/server'
export async function POST(req: NextRequest){
  try{
    const body = await req.json();
    const {email, message} = body;

    if(!email || !message){
      return new Response(JSON.stringify({error: "Missing fields"}), {status: 400})
    }
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

    const telegramMessage = `
📬 New Contact Form Submission
--------------------------
📧 Email: ${email}
💬 Message: ${message}
    `;

    const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });
    if(!telegramRes.ok){
      return new Response(JSON.stringify({error: "Failed to send telegram message"}),{status: 500})
    }
    return new Response(JSON.stringify({message: "Message send successfully"}),{status: 200})
  }catch(error){
    return new Response(JSON.stringify({error: "Internal Server Error"}), {status: 500})
  }
}