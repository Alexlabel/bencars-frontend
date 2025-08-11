import Image from "next/image"
export const BencarsIsBridge : React.FC = () => {
    return (
        <div className="relative w-full flex flex-col flex-wrap tablet:grid grid-cols-2 gap-x-8 py-16 max-md:px-4">
            <div className="flex flex-col gap-8">
                {/* Заголовк*/}
                <div className="w-full h-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-[var(--foreground)] font-[300] text-[28px] tablet:text-[42px] ">Bencars —</h1>
                        <p className="text-[#8C8C8C] font-[300] text-[28px]">это мост между покупателями</p>
                        <p className="text-[#8C8C8C] font-[300] text-[28px]">и дилерами при поиске лучшего предложения</p>
                    </div>
                    <div className="relative w-full h-auto aspect-[343/136]">
                        <Image src="/test-car2.png" alt="Машина 2" fill/>
                    </div>
                </div>
            </div>
            <div className="h-full justify-between flex md:items-center flex-col md:grid md:grid-cols-2 gap-x-8 gap-8 max-tablet:gap-4 max-tablet:mt-12">
                <div>
                    <div className="flex gap-8 max-tablet:flex-col md:flex-col max-tablet:gap-4">
                        <div className="bg-[#E2E2E2] rounded-[36px] p-6 md:p-9">
                            <p className="font-[400] text-[18px] leading-[1.3] text-[var(--foreground)]">Современный каталог со всеми новыми авто: официальные и привезенные по параллельному импорту</p>
                        </div>
                        <div className="bg-[#E2E2E2] rounded-[36px] p-6 md:p-9">
                            <p className="font-[400] text-[18px] leading-[1.3] text-[var(--foreground)]">Продвинутый и удобный поиск выгодных предложений. Тепловая карта с ценами и скидками от автодилеров</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#E2E2E2] rounded-[36px] p-6 md:p-9 flex gap-4 md:flex-col w-full">
                    <p className="md:order-2 font-[400] text-[18px] leading-[1.3] text-[var(--foreground)]">Бесплатная консультация специалистов: поможем с выбором авто, если вы еще не нашли свой идеальный вариант</p>
                    <div className="md:order-1 flex justify-center items-center rounded-[44px] max-md:w-[72px] max-md:h-[56px] md:w-[108px] md:h-[84px] border-3 border-[#AFAFAF] md:self-end">
                        <Image src="/arrow.svg" alt="Стрелка верх" width="24" height="24" />
                    </div>
                </div>
            </div>
        </div>
    )
}