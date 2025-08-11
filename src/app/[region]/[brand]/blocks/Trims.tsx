"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Trim = {
    id: string | number;
    name: string;
    price: string;
    desc: string;
    monthly?: string;
};

type Car = {
    id: string;
    name: string;
    trims: Trim[];
};

// Demo data. Replace with real API data when wiring backend
const cars: Car[] = [
    {
        id: "jetour-dashing",
        name: "Jetour Dashing",
        trims: [
            {
                id: 1,
                name: "Comfort",
                price: "от 2 039 900 ₽",
                desc: "1.5 (147 л.с), Бензин, Передний, Автомат",
                monthly: "от 35 500 ₽/мес",
            },
            {
                id: 2,
                name: "Luxury",
                price: "от 2 199 000 ₽",
                desc: "1.6 (186 л.с), Бензин, Полный, Робот",
                monthly: "от 38 200 ₽/мес",
            },
            {
                id: 3,
                name: "Premium",
                price: "от 2 350 000 ₽",
                desc: "1.5 (150 л.с), Бензин, Передний, Автомат",
                monthly: "от 41 900 ₽/мес",
            },
            {
                id: 4,
                name: "Ultimate",
                price: "от 2 550 000 ₽",
                desc: "1.5 (177 л.с), Бензин, Полный, Автомат",
                monthly: "от 45 000 ₽/мес",
            },
        ],
    },
    {
        id: "chery-tiggo-7-pro",
        name: "Chery Tiggo 7 Pro",
        trims: [
            {
                id: 1,
                name: "Standard",
                price: "от 1 899 000 ₽",
                desc: "1.5 (147 л.с), Бензин, Передний, Вариатор",
                monthly: "от 33 000 ₽/мес",
            },
            {
                id: 2,
                name: "Style",
                price: "от 2 020 000 ₽",
                desc: "1.5 (147 л.с), Бензин, Полный, Вариатор",
                monthly: "от 35 400 ₽/мес",
            },
            {
                id: 3,
                name: "Tech",
                price: "от 2 190 000 ₽",
                desc: "1.6 (186 л.с), Бензин, Полный, Робот",
                monthly: "от 38 700 ₽/мес",
            },
        ],
    },
    {
        id: "geely-coolray",
        name: "Geely Coolray",
        trims: [
            {
                id: 1,
                name: "Base",
                price: "от 1 750 000 ₽",
                desc: "1.5 (177 л.с), Бензин, Передний, Автомат",
                monthly: "от 30 500 ₽/мес",
            },
            {
                id: 2,
                name: "Comfort",
                price: "от 1 890 000 ₽",
                desc: "1.5 (177 л.с), Бензин, Полный, Автомат",
                monthly: "от 33 400 ₽/мес",
            },
        ],
    },
];

export const Trims: React.FC = () => {
    const [selectedCarId, setSelectedCarId] = useState<string>(cars[0]?.id ?? "");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

    const selectedCar = useMemo(() => cars.find((c) => c.id === selectedCarId) ?? cars[0], [selectedCarId]);
    const trims = selectedCar?.trims ?? [];
    const totalSlides = Math.max(1, Math.ceil((trims.length || 1) / cardsPerSlide));

    useEffect(() => {
        const updateCardsPerSlide = () => {
            if (typeof window === "undefined") return;
            const w = window.innerWidth;
            if (w <= 768) setCardsPerSlide(1);
            else if (w >= 1920) setCardsPerSlide(4);
            else setCardsPerSlide(3);
        };
        updateCardsPerSlide();
        window.addEventListener("resize", updateCardsPerSlide);
        return () => window.removeEventListener("resize", updateCardsPerSlide);
    }, []);

    // Reset slide when car or cardsPerSlide changes to keep index valid
    useEffect(() => {
        setCurrentSlide(0);
    }, [selectedCarId, cardsPerSlide]);

    const goToPrevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    const goToNextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    const goToSlide = (i: number) => setCurrentSlide(i);

    return (
        <div className="relative w-full py-8 px-4">
            {/* Title */}
            <div className="font-[300] text-[28px] tablet:text-[42px] mb-5">Комплектации и цены</div>

            {/* Car selector strip */}
            <div className="w-full mb-6">
                <div className="flex flex-wrap items-center gap-8 border-b-2 border-b-gray-300 pt-2">
                    {cars.map((car) => {
                        const isActive = car.id === selectedCarId;
                        return (
                            <button
                                key={car.id}
                                tabIndex={0}
                                onClick={() => setSelectedCarId(car.id)}
                                className={`cursor-pointer flex p-4 items-center focus:bg-[var(--green)] transition-all duration-300 `}
                                style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                                aria-pressed={isActive}
                                aria-label={`Выбрать ${car.name}`}
                            >
                                <span className={`text-[18px] font-[400] leading-[1.3] text-[#636363]`}>{car.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Slider */}
            <div className="w-full flex flex-col gap-6 justify-between">
                <div className="relative w-full rounded-[36px] overflow-hidden">
                    {/* Nav arrows */}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full shadow-lg p-2 transition disabled:opacity-40"
                        disabled={currentSlide === 0}
                        aria-label="Предыдущие комплектации"
                    >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full shadow-lg p-2 transition disabled:opacity-40"
                        disabled={currentSlide === totalSlides - 1}
                        aria-label="Следующие комплектации"
                    >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>

                    <div
                        className="flex gap-8 transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="flex gap-8">
                                    {(trims.length ? trims : [{ id: "empty", img: "/test-car.png", name: "Нет комплектаций", price: "—", desc: "", monthly: "" } as Trim])
                                        .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                                        .map((trim) => (
                                            <div
                                                key={trim.id}
                                                className="relative bg-[var(--foreground)] rounded-[36px] p-6 overflow-hidden flex flex-col gap-4 w-full transition"
                                            >
                                                <div className="flex justify-between">
                                                    <h1 className="text-[24px] tablet:text-[28px] leading-[1.1] font-[400] text-white">{trim.name}</h1>
                                                    <Image src="/car.svg" alt="Car vector" width="130" height="48"/>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    <div className="flex-1 bg-[#636363] rounded-[8px] p-6 flex flex-col justify-between">
                                                        <span className="text-[#8C8C8C] text-[16px] leading-[1.3] font-[400]">Двигатель</span>
                                                        <div className="flex gap-1">
                                                            <Image src="/Engine.svg" alt="Engine" width="16" height="16"/>
                                                            <span className="text-[16px] leading-[1.3] font-[400] text-[#E2E2E2]">1.5 л, 147 л.с.</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-[#636363] rounded-[8px] p-6 flex flex-col justify-between">
                                                        <span className="text-[#8C8C8C] text-[16px] leading-[1.3] font-[400]">Трансмиссия</span>
                                                        <div className="flex gap-1">
                                                            <Image src="/Transmission.svg" alt="Engine" width="16" height="16"/>
                                                            <span className="text-[16px] leading-[1.3] font-[400] text-[#E2E2E2]">Робот</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 bg-[#636363] rounded-[8px] p-6 flex flex-col justify-between">
                                                        <span className="text-[#8C8C8C] text-[16px] leading-[1.3] font-[400]">Привод</span>
                                                        <div className="flex gap-1">
                                                            <Image src="/Engine.svg" alt="Engine" width="16" height="16"/>
                                                            <span className="text-[16px] leading-[1.3] font-[400] text-[#E2E2E2]">Передний</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-[400] text-[18px] leading-[1.3] text-[#8C8C8C]">От производителя (РРЦ)</span>
                                                    <span className="line-through text-[#8C8C8C] font-[400] text-[20px] leading-[1.1]">2 380 000 ₽</span>
                                                </div>
                                                <div className="rounded-[28px] bg-[var(--green)] flex justify-center items-center">
                                                    <span className="text-[var(--foreground)] text-[18px] font-[600] leading-[1.1]">Подтвердить</span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-[10px] h-[10px] rounded-full transition-all duration-200 bg-black ${index === currentSlide ? "w-[20px]" : "bg-opacity-50"}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};