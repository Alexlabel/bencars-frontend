"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { useState } from "react";
export default function MainPromoSlider() {
    const slides = [
        { id: 1, img: "/images/bencars-footer.png", title: "Bencars - лучшие предложения для покупки автомобилей" },
        { id: 2, img: "/images/chery-footer.png", title: "Дилер автомобилей Cherry" },
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="relative w-full h-full flex flex-col gap-6 mt-6">
            {/* Верхний блок*/}
            <div className="relative w-full flex max-md:flex-col tablet:grid tablet:grid-cols-2 sm:gap-x-8 items-center gap-8 ">
                {/* Текст*/}
                <div className="order-2 tablet:order-1 h-full w-full max-md:px-4 items-center flex">
                    <div className="flex flex-col gap-8">
                        <div className="text-[30px] md:text-[48px] lg:text-[64px] font-[300] leading-[110%] text-[var(--color-foreground)] whitespace-nowrap">
                            <h1>Bencars - сервис</h1>
                            <h1>поиска дешевых</h1>
                            <h1>новых авто</h1>
                            <h1>от официальных</h1>
                            <h1>дилеров CHERY</h1>
                        </div>
                        <p className="text-[#636363]">Помогаем покупателям сравнить цены и скидки в соседних регионах РФ на весь модельный ряд CHERY, а также найти самое выгодное предложение в Ростове-на-Дону</p>
                    </div>
                </div>
                {/* Слайд блок*/}
                <Swiper
                    effect="fade"
                    modules={[Autoplay, EffectFade]}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="order-1 tablet:order-2 relative w-full h-[480px] md:h-[460px] lg:h-[520px] rounded-[36px] overflow-hidden"
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <>
                            <div className="inverted-radius-md relative w-full h-full">
                                <Image
                                    // src={slide.img}
                                    src="/test-car.png"
                                    alt={slide.title}
                                    fill
                                    className="object-cover z-0"
                                    priority
                                />
                                {/* Виньетка*/}
                                <div 
                                    className="pointer-events-none absolute inset-0 rounded-[28px]"
                                    style={{
                                        background: "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.6) 100%)"
                                    }} 
                                />
                                <div className="absolute top-0 left-2 text-white p-6 z-10">
                                    <h2 className="text-[24px] md:text-[32px] font-[400]">
                                        {slide.title}
                                    </h2>
                                </div>
                            </div>
                            {/* Кнопка*/}
                            <div className="absolute bottom-0 right-2 py-[14px] px-[36px] text-[var(--color-foreground)] text-[18px] leading-[1.3] tracking-[0.4px] z-10 bg-[#D1F005] rounded-[28px] font-[500]">
                                Подробнее
                            </div>
                            </>
                        </SwiperSlide>
                    ))}
                    <div className="absolute left-6 bottom-6 flex gap-[4px] z-20">
                        {slides.map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-[6px] h-[6px] rounded-full bg-white ${activeIndex === idx ? 'w-[24px]' : 'opacity-50'} transition-all duration-300`} 
                            />)
                        )}
                    </div>
                </Swiper>
            </div>
            {/* Нижний блок с описанием*/}
            <div className="w-full grid grid-cols-2 gap-x-0 gap-y-0 md:flex justify-between gap-4 text-[14px] md:text-[20px] text-[var(--color-foreground)]">
                <div className="p-3 flex items-start md:items-center gap-2 md:gap-4 font-[400]">
                    <Image src="/icons-description/Zero.svg" alt="0" width="36" height="36"/>
                    Сервис абсолютно бесплатный
                </div>
                <div className="p-3 flex items-start md:items-center gap-2 md:gap-4">
                    <Image src="/icons-description/Best.svg" alt="0" width="36" height="36"/>
                    Подборки лучших предложений
                </div>
                <div className="p-3 flex items-start md:items-center gap-2 md:gap-4">
                    <Image src="/icons-description/Price.svg" alt="0" width="36" height="36"/>
                    Актуальные прайсы и скидки
                </div>
                <div className="p-3 flex items-start md:items-center gap-2 md:gap-4">
                    <Image src="/icons-description/Search.svg" alt="0" width="36" height="36"/>
                    Поможем выбрать авто
                </div>
            </div>
        </div>
    )
}