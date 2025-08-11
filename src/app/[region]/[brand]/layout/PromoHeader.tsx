"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Model } from "@/components/pages/PromoPage";
interface PromoHeaderProps {
    models?: Model[];
}
export const PromoHeader : React.FC<PromoHeaderProps> = ({models}) => {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false);
    return (
        <>
        <div className="w-full max-tablet:h-16 tablet:rounded-[36px] px-4 tablet:px-6 tablet:py-4 tablet:mt-4 tablet:flex tablet:flex-col tablet:gap-4 tablet:justify-between items-start bg-white">
            {/* Верхний блок */}
            <div className="w-full h-full flex items-center justify-between">
                <div className="flex gap-10 items-center">
                    <div className="relative w-[100px] h-[28px] tablet:w-[140px] tablet:h-[38px]">
                     <Image src="/logo.svg" alt="Bencars" fill/>
                    </div>
                    {/* Разделитель */}
                    <div className="w-[2px] h-[32px] bg-[#AFAFAF]"/>
                    {/* Бренд */}
                    <Image src="/logo-chery.svg" alt="Chery" width="100" height="12" />
                    <p className="font-[600] text-[14px] leading-[1.3] tracking-[0.4px]">Каталог автомобилей CHERY<br/>от официальных дилеров</p>
                </div>
                {/* Написать в чат */}
                <div className="max-tablet:hidden flex gap-8 items-center">
                    <div className="text-[var(--foreground)] h-[40px] flex items-center gap-4">
                        <Image src="/view.svg" alt="Смотреть" width="40" height="40"/>
                        <div className="flex gap-2 text-[var(--foreground)] bg-[#E2E2E2] lg:pr-3 rounded-[20px]">
                            <Image src="/like.svg" alt="Лайк" width="40" height="40"/>
                            <span className="max-lg:hidden flex items-center">100</span>
                        </div>
                    </div>
                    <button tabIndex={0} className="bg-[var(--foreground)] hover:scale-[1.03] cursor-pointer focus:bg-[var(--green)] focus:text-[var(--foreground)] transition-all duration-300 rounded-[24px] px-4 py-[6px] text-white">
                        Написать в чат
                    </button>
                </div>
                {/* Бургер меню для мобилок*/}
                <div onClick={() => setSidebarOpen(!sidebarOpen)} className="w-[48] h-[48] tablet:hidden" >
                    <Image src="/burger.svg" alt="Меню" height="48" width="48"/>
                </div>
            </div>
            {/* Разделитель  */}
            <div className="w-full h-[1px] bg-[#E2E2E2] mt-2 -mb-1 max-tablet:hidden"/>
            {/* Нижний блок  */}          
            <div className="w-full md:flex md:justify-center max-tablet:hidden">
                <div className="max-md:w-full flex gap-6 max-md:justify-between md:gap-6">
                    {/* О сервисе Bencars*/}
                    <button tabIndex={0} onClick={() => window.location.href = "/"} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] outline-0 focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            О сервисе Bencars
                        </span>
                    </button>
                    {/* Акции {brand}*/}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Акции Chery
                        </span>
                    </button>
                    {/* Сравнение цен */}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Сравнение цен
                        </span>
                    </button>
                    {/* Модели {brand} */}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Модели Chery
                        </span>
                        <div className="group-focus:rotate-180 transition-all duration-300 ease">
                            <Image src="/chevron.svg" alt="Стрелка" width="24" height="24"/>
                        </div>
                        <div className="
                            z-50 rounded-[28px] absolute top-[100%] left-0
                            flex-col text-[18px] font-[400] text-[var(--foreground)] w-[250px] bg-white shadow-[0px_0px_20px_0px_#00000022] overflow-hidden
                            transition-all duration-300
                            opacity-0 -translate-y-2 pointer-events-none
                            group-focus:opacity-100 group-focus:translate-y-0 group-focus:pointer-events-auto group-focus:flex
                        ">
                            {models?.map((model) => (
                                <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">{model.name}</div>
                            ))}
                        </div>
                    </button>
                    {/* Комплектации */}

                </div>
            </div>
            {/* Overlay for sidebar*/}
            <div className={`fixed inset-0 bg-black/30 z-50 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`} onClick={() => setSidebarOpen(false)}></div>
            {/* Мобилка сайдбар*/}
            <div className={`fixed right-0 top-0 h-full w-[80vw] tablet:w-[50vw] bg-white z-60 flex flex-col gap-4 p-6 shadow-2xl ${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'} transition-all duration-300`}>
                {/* Меню */}      
                <button onClick={() => router.push('/')} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    О сервисе Bencars
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Акции Chery
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Сравнение цен
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Модели Chery
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Комплектации
                </button>
            </div>
        </div>
        </>
    )
}