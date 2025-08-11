import Image from "next/image";
export default function Reviews() {
    return (
        <div className="relative w-full py-6">
            <h1 className="font-[300] mx-4 mb-4 text-[28px] tablet:text-[42px] text-[var(--foreground)]">Отзывы и рейтинги по новым автомобилям</h1>
            <div className="relative w-full bg-white tablet:rounded-[36px] py-6 flex flex-col gap-8 px-4">
                <h2 className="text-[24px] leading-[1.1] font-[500] text-[var(--foreground)] tablet:absolute left-8 top-12">Haval Jolion, 2025</h2>
                <div className="flex gap-8 flex-col md:flex-row items-center">
                    <div className="md:flex-1 order-1 md:order-2 relative w-full h-[257px] tablet:h-[320px] overflow-hidden">
                        <Image src="/test-car3.png" alt="Тест машина 3" fill priority style={{objectFit: 'cover'}} />
                    </div>
                    <div className="flex-1 order-2 md:order-1 relative w-full h-fit rounded-[36px] p-4 bg-[var(--background)] flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            <div className="flex flex-row items-center gap-1">
                                <span className="text-[14px] leading-[1.3] tracking-[0.4px] font-[600] whitespace-nowrap">Рейтинг Haval Jolion</span>
                                <Image src="/question.svg" alt="question" width="20" height="20"/>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="order-1 md:order-2 flex flex-row gap-[8px]">
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                </div>
                                <span className="order-2 md:order-1 text-[20px] leading-[1.1] font-[600] md:text-[40px] lg:text-[56px]">4,55</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 w-full justify-between">
                            <div className="flex flex-row items-center gap-1">
                                <span className="text-[14px] leading-[1.3] tracking-[0.4px] font-[600] whitespace-nowrap">Народный рейтинг</span>
                                <Image src="/question.svg" alt="question" width="20" height="20"/>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <div className="order-1 md:order-2 flex flex-row gap-[8px]">
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                    <Image src="/star.svg" alt="star" width="20" height="20" className="tablet:w-[24px] tablet:h-[24px]" />
                                </div>
                                <span className="order-2 md:order-1 text-[20px] leading-[1.1] font-[600] md:text-[40px] lg:text-[56px]">4,9</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Преимущества и недостатки*/}
                <div className="flex flex-col gap-6 relative md:-top-[60px]">
                    <h1 className="font-[400] text-[24px] leading-[1.1] text-[var(--foreground)]">Отзывы реальных владельцев от 3 месяцев</h1>
                    <div className="flex flex-col gap-6 md:flex-row md:gap-32">
                        <div className="flex flex-col gap-4">
                            <span className="font-[600] text-[20px] leading-[1.1] text-[var(--foreground)]">Преимущества</span>
                            <ul className="flex flex-col gap-4 list-disc pl-4">
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">полный привод при этом небольшой расход топлива</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">комфортный просторный салон с качественными материалами</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">современные системы безопасности и помощи водителю</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">хорошая шумоизоляция и плавность хода</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">надежная подвеска и высокий клиренс</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-[600] text-[20px] leading-[1.1] text-[var(--foreground)]">Недостатки</span>
                            <ul className="flex flex-col gap-4 list-disc pl-4">
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">не самая мощная динамика разгона</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">относительно высокая стоимость обслуживания</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">небольшой выбор двигателей</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">нестабильная работа мультимедийной системы</li>
                                <li className="leading-[1.3] text-[18px] font-[400] text-[var(--foreground)] marker:text-black">качество сборки отдельных элементов</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}