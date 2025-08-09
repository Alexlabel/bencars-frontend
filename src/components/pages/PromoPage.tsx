"use client";
import React from "react";

import PromoSlider from "@/components/blocks/PromoSlider";
import { useEffect, useState } from "react";
import Image from "next/image";

// ✅ Типы для данных из Strapi
interface StrapiSlide {
    id: number | string;
    image: { url: string }; // Структура Strapi
    title?: string;
    description?: string;
}

interface Model {
    id: number | string;
    name: string;
    description: string;
    image: { url: string };
}

interface Trim {
    id: number | string;
    name: string;
    price: number;
}

export interface PromoPageData {
    slides?: StrapiSlide[];
    compareText?: string;
    models?: Model[];
    trims?: Trim[];
}

interface PromoPageProps {
    data: PromoPageData;
}

export default function PromoPage({ data }: PromoPageProps) {
    const [page, setPage] = useState<PromoPageData>(data);

    useEffect(() => {
        setPage(data);
    }, [data]);

    if (!page) return <p>Загрузка...</p>;

    return (
        <main className="max-w-7xl mx-auto px-4">
            {/* ✅ Слайдер промо (конвертируем StrapiSlide → Slide из PromoSlider) */}
            {page.slides && (
                <PromoSlider
                    slides={page.slides.map((slide) => ({
                        id: slide.id,
                        img: slide.image.url, // ✅ Преобразуем под тип PromoSlider
                        title: slide.title || "",
                    }))}
                />
            )}

            {/* Сравнение цен */}
            {page.compareText && (
                <section className="my-10">
                    <h2 className="text-2xl font-bold">Сравнение цен</h2>
                    <p className="text-gray-600">{page.compareText}</p>
                </section>
            )}

            {/* Модели автомобилей */}
            {page.models?.map((model, index) => (
                <section
                    key={model.id}
                    className={`my-10 flex flex-col md:flex-row ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                    <div className="md:w-1/2 relative h-64 md:h-96">
                        <Image
                            src={model.image.url}
                            alt={model.name}
                            fill
                            className="rounded-xl shadow object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 md:px-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold">{model.name}</h3>
                        <p>{model.description}</p>
                    </div>
                </section>
            ))}

            {/* Доступные комплектации */}
            {page.trims && page.trims.length > 0 && (
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Доступные комплектации</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {page.trims.map((trim) => (
                            <li key={trim.id} className="bg-white rounded-xl p-4 shadow">
                                <h4 className="font-semibold">{trim.name}</h4>
                                <p className="text-gray-600">
                                    {trim.price.toLocaleString()} ₽
                                </p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Форма "Уже есть предложение?" */}
            <section className="my-10 bg-primary text-white rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Уже есть предложение?</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full p-3 rounded text-black"
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full p-3 rounded text-black"
                    />
                    <button
                        type="submit"
                        className="bg-white text-primary px-6 py-3 rounded font-bold"
                    >
                        Отправить
                    </button>
                </form>
            </section>
        </main>
    );
}