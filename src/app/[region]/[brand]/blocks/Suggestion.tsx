import Image from "next/image"
export const Suggestion : React.FC = () => {
    return (
        <div className="relative w-full px-4 mt-12">
            <div className="relative w-full rounded-[36px] bg-[#CCCCCC] py-14 px-8 overflow-hidden flex justify-end">
            <div className="tablet:max-w-[70%] flex flex-col gap-4">
                <div className="tablet:hidden h-[160px] w-full relative rounded-[24px] overflow-hidden">
                    <Image src="/test-car6.png" alt="Фон машина" fill style={{objectFit: 'cover'}}/>
                </div>
                <h1 className="text-[42px] text-[var(--foreground)] font-[300]">Уже есть предложение? Мы его улучшим</h1>
                <div className="flex flex-row flex-wrap gap-4">
                    <input className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" placeholder="Имя"/>
                    <input className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" placeholder="Город обращения"/>
                    <input className="flex-1 bg-white text-[var(--foreground)] p-4 rounded-[28px] text-[18px]" placeholder="Телефон"/>
                </div>
                <div className="p-4 bg-[var(--green)] rounded-[28px] text-[var(--foreground)] leading-[1.3] tracking-[0.4px] font-[600] flex justify-center items-center">
                    Отправить
                </div>
            </div>
            <div className="absolute -left-60 top-0 w-[60%] h-full max-tablet:hidden">
                <Image src="/test-car6.png" alt="Фон машина" fill style={{objectFit: 'cover'}} />
            </div>
            </div>
        </div>
    )
}