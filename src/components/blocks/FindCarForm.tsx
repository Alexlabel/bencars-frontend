"use client";
import { useState } from "react";

export default function FindCarForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone }),
        });
        if (res.ok) {
            setStatus("✅ Заявка отправлена!");
            setName("");
            setPhone("");
        } else {
            setStatus("❌ Ошибка при отправке");
        }
    }

    return (
        <section className="my-10 bg-gray-100 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Найти новый автомобиль</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full p-3 rounded"
                />
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-3 rounded"
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded font-bold"
                >
                    Отправить
                </button>
                {status && <p className="text-sm mt-2">{status}</p>}
            </form>
        </section>
    );
}
