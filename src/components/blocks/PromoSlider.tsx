import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import React from "react";

export interface Slide {
    id: number | string;
    img: string;
    title: string;
}

interface PromoSliderProps {
    slides?: Slide[];
}

export default function PromoSlider({ slides = [] }: PromoSliderProps) {
    // ✅ Фолбэк слайдов, если пусто
    const preparedSlides: Slide[] =
        slides.length > 0
            ? slides
            : [
                { id: 1, img: "/images/bencars-header.png", title: "Промо бренд BenCars" },
                { id: 2, img: "/images/chery-header.png", title: "Лучшие предложения бренда Cherry" },
            ];

    return (
        <section className="my-6">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={[Autoplay]}
            >
                {preparedSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-6">
                                <h2 className="text-2xl md:text-4xl font-bold">
                                    {slide.title}
                                </h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}