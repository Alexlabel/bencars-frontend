import { useCity } from "../providers/useCity";
import Image from "next/image";
export const AutoCredits : React.FC = () => {
    const {city} = useCity()
    return (
        <div className="relative w-full py-6 px-4">
            <h1 className="text-[28px] tablet:text-[42px] text-[var(--foreground)] font-[300]">Автокредиты в {city}</h1>
            <div className="mt-4 flex flex-col md:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex-1 flex flex-col md:flex-row gap-8">
                        <div className="flex-2 bg-[#CCCCCC] rounded-[36px] p-4 tablet:p-9 flex flex-col justify-between gap-4 tablet:gap-6">
                            <h1 className="text-[20px] tablet:text-[28px]">Без первоначального взноса</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">153 авто</span>
                                <div className="rounded-[32px] bg-white py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#E2E2E2] rounded-[36px] p-4 tablet:p-9 flex flex-col justify-between gap-4 tablet:gap-6">
                            <h1 className="text-[20px] tablet:text-[28px]">Авторассрочка</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">63 авто</span>
                                <div className="rounded-[32px] bg-white py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-[#E2E2E2] rounded-[36px] p-4 tablet:p-9 flex flex-col justify-between gap-4 tablet:gap-6">
                            <h1 className="text-[20px] tablet:text-[28px]">С гос.поддержкой -20%</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">11 авто</span>
                                <div className="rounded-[32px] bg-white py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-2 bg-[#CCCCCC] rounded-[36px] p-4 tablet:p-9 flex flex-col justify-between gap-4 tablet:gap-6">
                            <h1 className="text-[20px] tablet:text-[28px]">Льготная ставка<br/> до 10% годов</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">29 авто</span>
                                <div className="rounded-[32px] bg-white py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-[var(--green)] rounded-[36px] p-9 flex flex-col gap-8">
                    <h1 className="font-[400] leading-[1.1] text-[24px] tablet:text-[28px] text-[var(--foreground)]">Фиксированный платеж в месяц</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        <div className="bg-white rounded-[24px] py-6 px-4 flex flex-col gap-4">
                            <h1 className="font-[400] text-[20px] tablet:text-[28px] text-[var(--foreground)] leading-[1.3]">до 20 000 ₽/мес</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">11 авто</span>
                                <div className="rounded-[32px] bg-[var(--background)] py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] py-6 px-4 flex flex-col gap-4">
                            <h1 className="font-[400] text-[20px] tablet:text-[28px] text-[var(--foreground)] leading-[1.3]">до 30 000 ₽/мес</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">43 авто</span>
                                <div className="rounded-[32px] bg-[var(--background)] py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] py-6 px-4 flex flex-col gap-4">
                            <h1 className="font-[400] text-[20px] tablet:text-[28px] text-[var(--foreground)] leading-[1.3]">до 40 000 ₽/мес</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">75 авто</span>
                                <div className="rounded-[32px] bg-[var(--background)] py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[24px] py-6 px-4 flex flex-col gap-4">
                            <h1 className="font-[400] text-[20px] tablet:text-[28px] text-[var(--foreground)] leading-[1.3]">до 50 000 ₽/мес</h1>
                            <div className="flex items-center justify-between">
                                <span className="text-[20px] leading-[1.3] ">94 авто</span>
                                <div className="rounded-[32px] bg-[var(--background)] py-[11px] px-[24px]">
                                    <Image src="/arrow.svg" alt="Arrow" width="24" height="24"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}