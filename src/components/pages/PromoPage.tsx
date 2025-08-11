"use client";
import React from "react";

import PromoSlider from "@/components/blocks/PromoSlider";
import { useEffect, useState } from "react";
import Image from "next/image";
import PromoPageSlider from "@/app/[region]/[brand]/blocks/PromoSlider";
import { PromoHeader } from "@/app/[region]/[brand]/layout/PromoHeader";
import { PriceComparison } from "../blocks/PriceComparison";
import { ModelsBlock } from "@/app/[region]/[brand]/blocks/ModelsBlock";

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

    console.log('Full data:', JSON.stringify(data, null, 2))
    if (!page) return <p>Загрузка...</p>;

    return (
        <div className="w-full max-w-[1620px] max-lg:max-w-[1280px] mx-auto md:px-8 bg-[#F2F2F2] flex flex-col gap-4">
            <PromoHeader />
            {/* ✅ Слайдер промо (конвертируем StrapiSlide → Slide из PromoSlider) */}
            {page.slides && (
                <PromoPageSlider
                    slides={page.slides.map((slide) => ({
                        id: slide.id,
                        image: slide.image.url, // ✅ Преобразуем под тип PromoSlider
                        title: slide.title || "",
                    }))}
                />
            )}

            {/* Сравнение цен */}
            {page.compareText && (
                <PriceComparison compareText={page.compareText}/>
            )}

            {/* Модели автомобилей */}
            {page.models && (
                <ModelsBlock />
            )}

            {/* Доступные комплектации */}
            {page.trims && page.trims.length > 0 && (
                <section className="my-10">
                    <h2 className="text-2xl font-bold mb-4">Доступные комплектации</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {page.trims.map((trim) => (
                            <li key={trim.id} className="bg-white rounded-xl p-4 shadow">
                                <h4 className="font-semibold">{trim.name}</h4>
                                <p className="text-gray-600">
                                    {trim.price} ₽
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
        </div>
    );
}