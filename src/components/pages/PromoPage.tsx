"use client";
import React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import PromoPageSlider from "@/app/[region]/[brand]/blocks/PromoSlider";
import { PromoHeader } from "@/app/[region]/[brand]/layout/PromoHeader";
import { PriceComparison } from "../blocks/PriceComparison";
import { ModelsBlock } from "@/app/[region]/[brand]/blocks/ModelsBlock";
import { Trims } from "@/app/[region]/[brand]/blocks/Trims";
import { FindCarFormBottom } from "../blocks/FindCarFormBottom";
import { Suggestion } from "@/app/[region]/[brand]/blocks/Suggestion";
import { Footbar } from "../layout/Footbar";

// ✅ Типы для данных из Strapi
interface StrapiSlide {
    id: number | string;
    image: { url: string }; // Структура Strapi
    title?: string;
    description?: string;
}

export interface Model {
    id: number | string;
    name: string;
    description: string;
    image: { url: string };
}

export interface Trim {
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
            <PromoHeader models={page.models} />
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
                <ModelsBlock models={page.models}/>
            )}

            {/* Доступные комплектации */}
            {page.trims && page.trims.length > 0 && (
                <Trims trims={page.trims} cars={page.models} />
            )}

            {/* Форма "Уже есть предложение?" */}
            <Suggestion />

            <Footbar />
        </div>
    );
}