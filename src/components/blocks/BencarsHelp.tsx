"use client";
import Image from "next/image";
export const BencarsHelp : React.FC = () => {
    return (
        <>
            <div className="w-full py-[64px] flex flex-col gap-[48px] px-4">
                <h1 className="font-[300] text-[28px] tablet:text-[42px] text-[var(--foreground)]">Как Bencars помогает с поиском автомобиля?</h1>
                {/* Выбрать свой будущий автомобиль*/}
                <div className="relative w-full">
                    <div
                        className="relative bg-white inverted-radius rounded-[36px] p-9 pb-[78px] tablet:pb-[88px] md:pb-[108px] overflow-hidden"
                    >
                        <div className="flex lg:justify-between max-lg:flex-col max-lg:gap-5 z-10">
                            <span className="text-[var(--foreground)] leading-[1.1] font-[400] text-[20px] tablet:text-[28px]">Выбрать свой будущий автомобиль: марка, модель, комплектация и цвет</span>
                            <span className="text-[#636363] font-[400] leading-[1.3] text-[18px] tablet:text-[20px]">Если вы еще не определились или сомневаетесь в своем выборе нового автомобиля - специалисты Bencars смогут предложить подходящие варианты под ваши запросы. Все общение обычно занимает около 20 минут, это абсолютно бесплатно</span>
                            <span className="absolute left-9 bottom-4 font-[600] text-[32px] tablet:text-[42px]">01.</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-[270px] tablet:w-[380px] flex gap-4 z-20">
                        <div className="rounded-[32px] border-2 border-[#CCCCCC] py-[6px] px-4 tablet:py-[11px] cursor-pointer hover:bg-[#CCCCCC] transition-all duration-300">
                            <span className="font-[600] text-[16px] tablet:text-[18px] text-[var(--foreground)] ">
                                <span className="max-tablet:hidden">Написать </span>
                                в чат
                            </span>
                        </div>
                        <div className="rounded-[32px] py-[6px] px-4 tablet:py-[11px] cursor-pointer bg-[var(--green)] transition-all duration-300">
                            <span className="font-[600] text-[16px] tablet:text-[18px] text-[var(--foreground)] ">Заказать звонок</span>
                        </div>
                    </div>
                </div>
                {/* Изучить актуальные цены и скидки*/}
                <div className="relative w-full">
                    <div
                        className="relative bg-white inverted-radius-sm rounded-[36px] p-9 pb-[78px] tablet:pb-[88px] md:pb-[108px] overflow-hidden"
                    >
                        <div className="flex lg:justify-between max-lg:flex-col max-lg:gap-5 z-10">
                            <span className="text-[var(--foreground)] leading-[1.1] font-[400] text-[20px] tablet:text-[28px]">Изучить актуальные цены и скидки в каталоге Bencars</span>
                            <span className="text-[#636363] font-[400] leading-[1.3] text-[18px] tablet:text-[20px]">Новые автомобили у всех дилеров одинаковые. При этом цены и скидки на машины разнятся от региона к региону, и меняются каждый месяц. Вы можете найти самую дешевую цену на интересующий вас автомобиль - в своем или соседних регионах</span>
                            <span className="absolute left-9 bottom-4 font-[600] text-[32px] tablet:text-[42px]">02.</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <div className="rounded-[32px] py-[6px] px-4 tablet:py-[11px] cursor-pointer bg-[var(--green)] transition-all duration-300">
                            <span className="font-[600] text-[16px] tablet:text-[20px] text-[var(--foreground)] ">Каталог</span>
                        </div>
                    </div>
                </div>
                {/* Связаться с дилерским центром*/}
                <div className="relative w-full">
                    <div
                        className="relative bg-white inverted-radius-md rounded-[36px] p-9 pb-[78px] tablet:pb-[88px] md:pb-[108px] overflow-hidden"
                    >
                        <div className="flex lg:justify-between max-lg:flex-col max-lg:gap-5 z-10">
                            <span className="text-[var(--foreground)] leading-[1.1] font-[400] text-[20px] tablet:text-[28px]">Связаться с дилерским центром и согласовать все условия сделки</span>
                            <span className="text-[#636363] font-[400] leading-[1.3] text-[18px] tablet:text-[20px]">Уточнить большинство вопросов вы сможете дистанционно по телефону, а завершение сделки будет происходить на территории автосалона официального дилера. Вам так же доступны услуги тест-драйва, trade-in и автокредитования</span>
                            <span className="absolute left-9 bottom-4 font-[600] text-[32px] tablet:text-[42px]">03.</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <div className="rounded-[32px] py-[6px] px-4 tablet:py-[11px] cursor-pointer bg-[var(--green)] transition-all duration-300">
                            <span className="font-[600] text-[16px] tablet:text-[20px] text-[var(--foreground)] ">Оставить заявку</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}