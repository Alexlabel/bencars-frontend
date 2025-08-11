
import React, { useEffect, useState } from "react";
import { useCity } from "../providers/useCity";
import Image from "next/image";
const offers = [
    {
        id: 1,
        img: "/test-car.png",
        name: "Jetour Dashing",
        year: "2025",
        price: "от 2 039 900 $",
        desc: "1.5 (147 л.с), Бензин, Передний, Автомат",
        monthly: "от 235 505 ₽/мес",
    },
    {
        id: 2,
        img: "/test-car2.png",
        name: "Chery Tiggo 7 Pro",
        year: "2024",
        price: "от 1 899 000 $",
        desc: "1.6 (186 л.с), Бензин, Полный, Робот",
        monthly: "от 210 000 ₽/мес",
    },
    {
        id: 3,
        img: "/test-car.png",
        name: "Exeed LX",
        year: "2025",
        price: "от 2 150 000 $",
        desc: "1.5 (150 л.с), Бензин, Передний, Автомат",
        monthly: "от 245 000 ₽/мес",
    },
    {
        id: 4,
        img: "/test-car2.png",
        name: "Geely Coolray",
        year: "2024",
        price: "от 1 750 000 $",
        desc: "1.5 (177 л.с), Бензин, Передний, Автомат",
        monthly: "от 195 000 ₽/мес",
    },
];

export const BestOffers: React.FC = () => {
    const { city } = useCity();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);
    const totalSlides = Math.ceil(offers.length / cardsPerSlide);

    useEffect(() => {
        const updateCardsPerSlide = () => {
            if (window.innerWidth <= 768) {
                setCardsPerSlide(1);
            } else if (window.innerWidth >= 1920) {
                setCardsPerSlide(4);
            } else {
                setCardsPerSlide(3);
            }
        };

        // Вызываем сразу при загрузке
        updateCardsPerSlide();
        
        // Добавляем слушатель для resize
        window.addEventListener('resize', updateCardsPerSlide);
        
        // Очищаем слушатель при размонтировании
        return () => window.removeEventListener('resize', updateCardsPerSlide);
    }, []);
    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className="relative w-full py-12 px-4">
            <div className="font-[300] text-[28px] tablet:text-[42px] mb-4">
                Лучшие предложения по новым авто в<br/>
                в {city}
            </div>
            <div className="w-full flex flex-col gap-6 justify-between">
                <div className="relative w-full rounded-[36px] overflow-hidden">
                    {/* Стрелки навигации */}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full shadow-lg p-2 transition disabled:opacity-40"
                        disabled={currentSlide === 0}
                        aria-label="Предыдущие"
                    >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full shadow-lg p-2 transition disabled:opacity-40"
                        disabled={currentSlide === totalSlides - 1}
                        aria-label="Следующие"
                    >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    
                    <div className="flex gap-8 transition-transform duration-500"
                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="flex gap-8">
                                    {offers
                                        .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                                        .map((offer) => (
                                        <div
                                            key={offer.id}
                                            className="relative bg-white rounded-[36px] overflow-hidden flex flex-col gap-4 w-full transition"
                                        >
                                            <div className="relative h-[220px] w-full">
                                                <Image src={offer.img} alt={offer.name} fill style={{ objectFit: "cover" }} className="transition duration-500" />
                                            </div>
                                            <div className="w-full px-4 py-4">
                                                <div className="w-full flex items-center justify-between mb-2">
                                                    <span className="font-[500] text-[20px] leading-[1.3] text-[var(--foreground)]">{offer.name}</span>
                                                    <span className="font-[400] text-[18px] leading-[1.3] text-[#CCCCCC]">{offer.year}</span>
                                                </div>
                                                <h1 className="font-[700] text-[28px] text-[var(--foreground)] mb-2">{offer.price}</h1>
                                                <p className="text-[16px] font-[400] leading-[1.3] text-[#636363] mb-1">{offer.desc}</p>
                                                <p className="text-[15px] font-[400] leading-[1.3] text-[#636363] mb-2">от официального дилера <br/>{city}</p>
                                                <p className="absolute right-4 bottom-4 font-[600] text-[16px] leading-[1.3] bg-white/80 px-2 py-1 rounded-lg">{offer.monthly}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Индикаторы */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-[10px] h-[10px] rounded-full transition-all duration-200 bg-black ${index === currentSlide ? "w-[20px]" : "bg-opacity-50"}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}