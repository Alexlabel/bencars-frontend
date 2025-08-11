"use client"
import Image from "next/image"
import { useCity } from "../providers/useCity";
import { useState } from "react";

export const FindCarFormBottom : React.FC = () => {
    const {city} = useCity();
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
        <div className="relative w-full px-4 mt-12">
            <div className="relative w-full rounded-[36px] bg-[#CCCCCC] py-14 px-8 overflow-hidden flex justify-end">
            <form method="POST" onSubmit={(e) => handleSubmit(e)} className="tablet:max-w-[70%] flex flex-col gap-4">
                <div className="tablet:hidden h-[160px] w-full relative rounded-[24px] overflow-hidden">
                    <Image src="/test-car4.png" alt="Фон машина" fill style={{objectFit: 'cover'}}/>
                </div>
                <h1 className="text-[28px] tablet:text-[42px] text-[var(--foreground)] font-[300]">Найти новый автомобиль в {city}</h1>
                <div className="flex flex-row flex-wrap gap-4">
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" 
                        placeholder="Имя"
                        required
                    />
                    <input 
                        type="text"
                        value={city}
                        disabled
                        className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" 
                        placeholder="Город обращения"
                    />
                    <input 
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" 
                        placeholder="Телефон"
                        required
                    />
                </div>
                {status && <p className="text-center">{status}</p>}
                <button 
                    type="submit" 
                    className="hover:scale-[1.01] transition-all hover:cursor-pointer duration-300 p-4 bg-[var(--green)] rounded-[28px] text-[var(--foreground)] leading-[1.3] tracking-[0.4px] font-[600] flex justify-center items-center"
                >
                    Подобрать авто
                </button>
            </form>
            <div className="absolute left-0 top-0 w-[40%] h-full max-tablet:hidden">
                <Image src="/test-car4.png" alt="Фон машина" fill style={{objectFit: 'cover'}} />
            </div>
            </div>
        </div>
    )
}