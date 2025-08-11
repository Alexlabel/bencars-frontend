"use client";
import { useState } from "react";
import { useCity } from "../providers/useCity";
import Image from "next/image";
const params = [
    { id: "brand", label: "Марка", type: "text" },
    { id: "model", label: "Модель", type: "text" },
    { id: "price", label: "Цена", type: "range", from: "", to: "" },
    { id: "body", label: "Кузов", type: "text" },
    { id: "transmission", label: "Трансмиссия", type: "text" },
    { id: "drive", label: "Привод", type: "text" },
    { id: "seats", label: "Количество мест", type: "text" },
    { id: "engine", label: "Двигатель", type: "text" },
    { id: "power", label: "Мощность", type: "range", from: "", to: "" }
];
export default function FindCarForm() {
    const {city} = useCity();

    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [status, setStatus] = useState("");

    // async function handleSubmit(e: React.FormEvent) {
    //     e.preventDefault();
    //     const res = await fetch("/api/telegram", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ name, phone }),
    //     });
    //     if (res.ok) {
    //         setStatus("✅ Заявка отправлена!");
    //         setName("");
    //         setPhone("");
    //     } else {
    //         setStatus("❌ Ошибка при отправке");
    //     }
    // }

    return (
        <div className="my-10 w-full bg-[var(--color-foreground)] pt-9 p-8 rounded-[36px] flex flex-col gap-[48px]">
            <div className="w-full flex flex-col gap-10">
                <h2 className="text-[28px] tablet:text-[40px] font-[300] text-white">Найти новый автомобиль в {city}</h2>
                <form className="w-full h-full flex flex-col gap-6">
                    {/* Чек боксы*/}
                    <div className="w-full min-h-[24px] flex flex-wrap gap-4 whitespace-nowrap">
                        <label className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 appearance-none bg-[#AFAFAF] border-4 border-[#AFAFAF] checked:bg-white rounded cursor-pointer" 
                            />
                            <span className="text-white text-[18px]">от официальных дилеров</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 appearance-none bg-[#AFAFAF] border-4 border-[#AFAFAF] checked:bg-white rounded cursor-pointer" 
                            />
                            <span className="text-white text-[18px]">от официальных дилеров</span>
                        </label>
                    </div>
                    <div className="w-full relative flex flex-wrap gap-7 order-last">
                        {/* Параметры */}
                        {params.map((param) => {
                            if (param.type == 'text') {
                                return (
                                    <div className="flex relative max-tablet:w-full" key={param.id}>
                                        <input 
                                            className="bg-[#252525] rounded-[28px] py-4 px-6 w-full text-[16px] leading-[1.3] font-[400] text-[#8C8C8C] transition-all duration-300"
                                            placeholder={param.label}
                                        />
                                        <Image
                                            className="absolute right-4 top-1/2 -translate-y-1/2  hover:scale-[1.1] transition-all duration-300 cursor-pointer"
                                            src="/chevron.svg" 
                                            alt="Стрелка"
                                            width="24" 
                                            height="24" 
                                            style={{ filter: 'invert(55%) sepia(0%) saturate(484%) hue-rotate(155deg) brightness(89%) contrast(89%)' }}
                                        />
                                    </div>
                                )
                            }
                            return (
                                <div className="flex gap-[4px] relative max-tablet:w-full rounded-[28px] overflow-hidden" key={param.id}>
                                    <input
                                        placeholder={`${param.label} от`}
                                        style={{
                                            borderTopLeftRadius: 28,
                                            borderBottomLeftRadius: 28,
                                        }}
                                        className="bg-[#252525] py-4 px-6 w-full text-[16px] leading-[1.3] font-[400] text-[#8C8C8C] transition-all duration-300"
                                    />
                                    <input
                                        placeholder="до"
                                        style={{
                                            borderTopRightRadius: 28,
                                            borderBottomRightRadius: 28,
                                        }}
                                        className="bg-[#252525] py-4 px-6 w-full text-[16px] leading-[1.3] font-[400] text-[#8C8C8C] transition-all duration-300"
                                    />
                                </div>
                            )
                        })}
                        {/* Найти */}
                        <div className="max-md:w-full cursor-pointer bg-[var(--green)] hover:bg-[#252525] rounded-[28px] py-4 px-12 text-[16px] leading-[1.3] font-[400] text-black hover:text-white transition-all duration-300">
                            Найти
                        </div>
                    </div>
                </form>
            </div>
            {/* <div>
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
            </div> */}
        </div>
    );
}
