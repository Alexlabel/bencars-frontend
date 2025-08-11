"use client";
import { useState } from "react";
import { useCity } from "../providers/useCity";
import Image from "next/image";
interface PriceComparisonProps {
    compareText?: string;
}
export const PriceComparison : React.FC<PriceComparisonProps> = ({compareText}) => {
    const {cities} = useCity();
    const [currentRegion, setCurrentRegion] = useState<string>(cities[0]);
    // фоллбек
    if (!compareText) {
        const compareText = "Цена на один и тот же новый автомобиль Haval Jolion, комплектация Comfort 2WD, 2025 отличается на 350 000 ₽ в ЮФО";
    }
    return (
        <div className="relative w-full py-8 max-md:px-4 flex flex-wrap max-tablet:flex-col max-md:gap-4 lg:gap-16 md:gap-32">
            <h1 className="text-[var(--foreground)] text-[28px] tablet:text-[42px]">Сравнение цен на новые авто</h1>
            <div className="relative w-full flex flex-wrap gap-8 tablet:justify-between">
                <div className="max-md:w-full h-fit bg-[#E2E2E2] p-9 rounded-[36px] flex flex-col gap-4">
                    <h3 className="text-[#636363] font-[400] text-[20px]">Вы ищете в {currentRegion}:</h3>
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[24px] lg:text-[28px] font-[400] leading-[1.1]">Новый Haval Jolion, 2025</h4>
                        <span className="text-[16px] lg:text-[20px] leading-[1.3] font-[400]">комплектация Comfort 2WD</span>
                    </div>
                </div>
                <div className="relative md:absolute w-full md:w-[60%] md:left-[100px] md:top-0 lg:w-[800px] lg:left-[100px] lg:top-0 aspect-[343/225]">
                    <Image src="/regions.svg" alt="Регионы" fill style={{objectFit: 'cover'}}/>
                </div>
                <div className="w-full md:max-w-[395px] lg:max-w-[435px] bg-[var(--foreground)] rounded-[36px] py-[24px] overflow-hidden">
                    <div className="w-full flex flex-col h-full overflow-auto">
                        {cities.map((city) => (
                            <div 
                                key={city}
                                tabIndex={0} 
                                className="cursor-pointer flex items-center focus:bg-[var(--green)] transition-all duration-300 group justify-between py-4 px-9"
                                onClick={() => setCurrentRegion(city)}
                            >
                                <div className="text-[18px] leading-[1.3] text-white font-[400] group-focus:text-[var(--foreground)]">{city}</div>
                                <span className="text-[20px] leading-[1.3] text-white font-[600] group-focus:text-[var(--foreground)]">от 1 649 000$</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative w-full flex justify-end">
                <div className="w-full md:max-w-[520px] lg:max-w-[720px] rounded-[36px] p-9 bg-white flex items-start justify-between">
                    <p className="font-[400] text-[16px] tablet:text-[20px] ">
                        {compareText || compareText}
                    </p>
                    <Image src="/Attention.svg" alt="Attention" width="48" height="48"/>
                </div>
            </div>
        </div>
    )
}