"use client";
import { useState } from "react";
import Image from "next/image"
export const Footbar : React.FC = () => {
    const [isBookCallModalOpened, setBookCallModalOpened] = useState<boolean>(false);
    return (
        <div className="w-full relative bg-[var(--foreground)] py-8 px-6 mt-16 md:rounded-[36px] flex flex-col gap-8">
            {/* Верхний блок */}
            <div className="w-full h-full flex items-center justify-between">
                <div className="relative w-[100px] h-[28px] tablet:w-[140px] tablet:h-[38px]">
                    <Image src="/logo-light.svg" alt="Bencars" fill/>
                </div>
                <div className="max-tablet:hidden flex-2 flex justify-center items-center">
                    <div className="flex gap-10">
                        <div tabIndex={0} className="text-[18px] text-white focus:text-[var(--green)] transition-all duration-300">Дилеры</div>
                        <div tabIndex={0} className="text-[18px] text-white focus:text-[var(--green)] transition-all duration-300">О сервисе Bencars</div>
                        <div tabIndex={0} className="text-[18px] text-white focus:text-[var(--green)] transition-all duration-300">Новости</div>
                    </div>
                </div>
                <div className="flex-wrap flex gap-4 items-center">
                    <div className="text-[var(--foreground)] h-[40px] flex items-center gap-4">
                        <Image src="/view.svg" alt="Смотреть" width="40" height="40"/>
                        <div className="flex gap-2 text-[var(--foreground)] bg-[##36363] lg:pr-3 rounded-[20px]">
                            <Image src="/like.svg" alt="Лайк" width="40" height="40"/>
                            <span className="max-lg:hidden flex items-center">100</span>
                        </div>
                    </div>
                    <button onClick={() => setBookCallModalOpened(!isBookCallModalOpened)} tabIndex={0} className="bg-[#636363] hover:scale-[1.03] cursor-pointer focus:bg-[var(--green)] focus:text-[var(--foreground)] transition-all duration-300 rounded-[24px] px-4 py-[6px] text-white">
                        Заказать звонок
                    </button>
                </div>
            </div>
            {/* Разделитель  */}
            <div className="w-full h-[1px] bg-[#E2E2E2] mt-2 -mb-1"/>
            {/* Нижний блок  */}
            <div className="w-full h-full flex justify-between">
                <div className="w-full gap-8 flex max-tablet:flex-col justify-between">
                    <div className="flex flex-col gap-[12px] leading-[1.3] tracking-[0.4px] text-[18px]">
                        <h1 className="font-[600] text-white">Новые авто</h1>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Полный каталог</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Авто от официальных дилеров</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Полный каталог</div>
                    </div>

                    <div className="flex flex-col gap-[12px] leading-[1.3] tracking-[0.4px] text-[18px]">
                        <h1 className="font-[600] text-white">С пробегом</h1>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Каталог с пробегом</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Авто от частных лиц</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Проверенные авто</div>
                    </div>

                    <div className="flex flex-col gap-[12px] leading-[1.3] tracking-[0.4px] text-[18px]">
                        <h1 className="font-[600] text-white">Услуги</h1>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Страхование</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Кредитование</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Лизинг</div>
                    </div>

                    <div className="flex flex-col gap-[12px] leading-[1.3] tracking-[0.4px] text-[18px]">
                        <h1 className="font-[600] text-white">Контакты</h1>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">О нас</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Поддержка</div>
                        <div tabIndex={0} className="font-[400] text-white opacity-40 focus:text-[var(--green)] transition-all duration-300">Обратная связь</div>
                    </div>
                </div>
            </div> 
        </div> 
    )
}