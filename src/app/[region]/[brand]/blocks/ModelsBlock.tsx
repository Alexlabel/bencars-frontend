import Image from "next/image"

import type { Model } from "@/components/pages/PromoPage"
interface ModelsBlockProps {
    models?: Model[];
}
export const ModelsBlock : React.FC<ModelsBlockProps> = ({models}) => {
    return (
        <div className="relative w-full">
            {/* Выбор модели */}
            <div className="relative w-full flex justify-between items-center gap-4 h-[87px] rounded-[36px] px-10 bg-[var(--foreground)] overflow-x-auto">
                {models?.map((model) => (
                    <div tabIndex={0} className="cursor-pointer text-[18px] text-white leading-[1.3] tracking-[0.4px] font-[600] focus:text-[var(--green)] transition-all duration-300">{model.name}</div>
                ))}
            </div>
            {models?.map((model, index) => (
                <div className="relative w-full py-8 tablet:py-10 md:py-12 lg:py-16 px-4">
                    <div className="relative w-full flex flex-col gap-8">
                        <div className="flex flex-col gap-0">
                            <h1 className="font-[300] text-[28px] tablet:text-[42px] text-[var(--foreground)]">{model.name}</h1>
                            <p className="font-[400] text-[18px] tablet:text-[24px] leading-[1.3] text-[#636363]">{model.description}</p>
                        </div>
                        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">

                            <div 
                                className="relative min-h-[300px] w-full h-full rounded-[36px] overflow-hidden flex flex-col"
                                style={{ order: index % 2 === 0 ? 'order-2' : 'order-1'}}
                            >
                                <div className="relative flex-1">
                                    <Image src={model.image.url} alt="Машина Chery" fill className="object-cover"/>
                                </div>
                                {/* <div className="flex justify-between gap-[4px] mt-[4px] h-[100px]">
                                    <div className="relative flex-1">
                                        <Image src="/test-car.png" alt="Машина Chery" fill className="object-cover"/>
                                    </div>
                                    <div className="relative flex-1">
                                        <Image src="/test-car.png" alt="Машина Chery" fill className="object-cover"/>
                                    </div>
                                    <div className="relative flex-1">
                                        <Image src="/test-car.png" alt="Машина Chery" fill className="object-cover"/>
                                    </div>
                                    <div className="relative flex-1 flex justify-center items-center">
                                        <Image src="/test-car.png" alt="Машина Chery" fill className="object-cover"/>
                                        <div className="absolute inset-0 bg-black/40"/>
                                        <span className="absolute text-white">еще 16 фото</span>
                                    </div>
                                </div> */}
                            </div>

                            <div 
                                className="relative w-full h-full flex flex-col gap-8"
                                style={{ order: index % 2 === 0 ? 'order-1' : 'order-2'}}
                            >
                                <ul className="flex flex-col gap-[4px] list-disc pl-4">
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">Мощный двигатель 1.5T с турбонаддувом</li>
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">7-ступенчатая роботизированная коробка передач DCT</li>
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">Система помощи при спуске и подъеме</li>
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">Современная мультимедийная система</li>
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">Панорамная крыша с люком</li>
                                    <li className="text-[18px] leading-[1.3] font-[400] text-[var(--foreground)]">Система кругового обзора 360°</li>
                                </ul>
                                <div className="flex flex-col gap-4 rounded-[36px] bg-[var(--foreground)] w-full md:max-w-[540px] p-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[16px] font-[400] leading-[1.3] text-white">Предложения оф. дилеров Chery в Ростовской области</span>
                                        <Image src="/Attention.svg" alt="attention" width="24" height="24"/>
                                    </div>

                                    {/* Разделитель */}
                                    <div className="w-full h-[1px] bg-[#636363]"/>

                                    <div className="flex justify-between">
                                        <span className="font-[400] text-[16px] leading-[1.3] text-white">С учетом выгод</span>
                                        <div className="flex gap-1">
                                            <span className="leading-[1.1] font-[600] text-[28px] text-[#8C8C8C]">от</span>
                                            <span className="leading-[1.1] font-[600] text-[28px] text-[var(--green)]"> 2 090 000 ₽</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-[400] text-[16px] leading-[1.3] text-[#8C8C8C]">От производителя (РРЦ)</span>
                                        <span className="leading-[1.1] font-[600] text-[24px] line-through text-[#8C8C8C]"> 2 980 000 ₽</span>
                                    </div>
                                    {/* Разделитель */}
                                    <div className="w-full h-[1px] bg-[#636363]"/>

                                    <div className="flex justify-between">
                                        <span className="font-[400] text-[16px] leading-[1.3] text-white">Максимальная скидка</span>
                                        <span className="leading-[1.1] font-[600] text-[16px] text-white"> до 890 000 ₽</span>
                                    </div>
                                </div>
                                <div className="relative w-full flex gap-4 max-md:flex-col">
                                    <button className="max-md:w-full rounded-[32px] border-2 border-[#CCCCCC] py-[11px] px-4 text-[var(--foreground)]">
                                        Сравнить цены в ЮФО
                                    </button>
                                    <button className="max-md:w-full rounded-[32px] bg-[var(--green)] py-[11px] px-4 text-[var(--foreground)]">
                                        Сравнить цены в ЮФО
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 absolute top-0 right-0">
                            <span className="max-md:hidden">Зафиксируйте<br/>условия до 31 Мая </span>
                            <Image src="/logo-shorten.svg" alt="логотип" width="38" height="38"/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}