import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).end();

    const { name, phone } = req.body;
    const TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
    const text = `📩 Новая заявка с Bencars.ru\nИмя: ${name}\nТелефон: ${phone}`;

    try {
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: CHAT_ID, text }),
        });
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(500).json({ error: "Ошибка при отправке" });
    }
}