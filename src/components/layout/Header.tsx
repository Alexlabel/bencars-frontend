"use client";
import Image from "next/image";
import { useState } from "react";
import { useCity } from "../providers/useCity";
export const Headers : React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<Boolean>(false);
    const {city, setCity, cities} = useCity();
    const [isBookCallModalOpened, setBookCallModalOpened] = useState<boolean>(false);
    {/* Выбор города*/}
    const [cityChoosing, setCityChoosing] = useState<Boolean>(false);
    const [isCityChooseModalOpened, setCityChooseModalOpened] = useState<boolean>(false);
    const [searchCity, setSearchCity] = useState<string>('');
    const filteredCities = cities.filter(city => city.toLowerCase().includes((searchCity.toLowerCase())))
    return (
        <>
        <div className="w-full max-tablet:h-16 tablet:rounded-[36px] px-4 tablet:px-6 tablet:py-4 tablet:mt-4 tablet:flex tablet:flex-col tablet:gap-4 tablet:justify-between items-start bg-white">
            {/* Верхний блок */}
            <div className="w-full h-full flex items-center justify-between">
                <div className="flex gap-10 items-center">
                    <div className="relative w-[100px] h-[28px] tablet:w-[140px] tablet:h-[38px]">
                     <Image src="/logo.svg" alt="Bencars" fill/>
                    </div>
                    {/* Выбор города */}
                    <div tabIndex={0} onClick={(e) => setCityChoosing(!cityChoosing)} className="relative max-tablet:hidden flex gap-[4px] items-center px-4 py-[11px] rounded-[20px] focus:outline-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <Image src="/Cursor.svg" alt="Cursor" width="24" height="24"/>
                        <span className="text-[15px] font-[500] tracking-[0.4px] leading-[1.3]">
                            {city}
                        </span>
                        <div className="group-focus:rotate-180 transition-all duration-300 ease">
                            <Image src="/chevron.svg" alt="Стрелка" width="24" height="24"/>
                        </div>
                        {/* Всплывающее окно*/}
                        <div 
                            className="
                                z-50 rounded-[28px] absolute top-[100%] left-0
                                flex-col text-[18px] font-[400] text-[var(--foreground)] bg-white shadow-[0px_0px_20px_0px_#00000022] overflow-hidden
                                transition-all duration-300 p-6
                                -translate-y-2 opacity-0
                                group-focus:opacity-100 group-focus:translate-y-0 group-focus:block group-focus:pointer-events-auto"
                            style={{pointerEvents: cityChoosing ? 'auto' : 'none'}}
                        >
                            <h1 className="text-left text-[18px] font-[400] leading-[1.3]">Ваш город Краснодар?</h1>
                            <div className="w-full flex gap-8 justify-between mt-6 group-focus:pointer-events-auto">
                                <button
                                    onClick={(e) => {
                                        setCity('Краснодар');
                                        const groupDiv = e.currentTarget.closest('.group');
                                        if (groupDiv) (groupDiv as HTMLElement).blur();
                                    }}
                                    className="cursor-pointer px-4 py-[6px] whitespace-nowrap rounded-[24px] bg-[var(--foreground)] hover:bg-black transition-all duration-300 text-white"
                                >
                                    Да, верно
                                </button>
                                <button
                                    onClick={(e) => {
                                        setCityChooseModalOpened(!isCityChooseModalOpened);
                                        const groupDiv = e.currentTarget.closest('.group');
                                        if (groupDiv) (groupDiv as HTMLElement).blur();
                                    }}
                                    className="cursor-pointer px-4 py-[6] rounded-[24px] border-[#AFAFAF] border-2 hover:bg-[var(--background)] text-[var(--foreground)] transition-all duration-300"
                                >
                                    Другой
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
                {/* Заказать звонок */}
                <div className="max-tablet:hidden flex gap-8 items-center">
                    <div className="text-[var(--foreground)] h-[40px] flex items-center gap-4">
                        <Image src="/view.svg" alt="Смотреть" width="40" height="40"/>
                        <div className="flex gap-2 text-[var(--foreground)] bg-[#E2E2E2] lg:pr-3 rounded-[20px]">
                            <Image src="/like.svg" alt="Лайк" width="40" height="40"/>
                            <span className="max-lg:hidden flex items-center">100</span>
                        </div>
                    </div>
                    <button onClick={() => setBookCallModalOpened(!isBookCallModalOpened)} tabIndex={0} className="bg-[var(--foreground)] hover:scale-[1.03] cursor-pointer focus:bg-[var(--green)] focus:text-[var(--foreground)] transition-all duration-300 rounded-[24px] px-4 py-[6px] text-white">
                        Заказать звонок
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
            <div className="w-full lg:flex lg:justify-center max-tablet:hidden">
                <div className="max-lg:w-full flex gap-6 justify-between">
                    {/* Новые авто*/}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] outline-0 focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Новые авто
                        </span>
                        <div className="group-focus:rotate-180 transition-all duration-300 ease">
                            <Image src="/chevron.svg" alt="Стрелка" width="24" height="24"/>
                        </div>
                        {/* Всплывающее окно*/}
                        <div className="
                            z-50 rounded-[28px] absolute top-[100%] left-0
                            flex-col text-[18px] font-[400] text-[var(--foreground)] w-[220px] bg-white shadow-[0px_0px_20px_0px_#00000022] overflow-hidden
                            transition-all duration-300
                            opacity-0 -translate-y-2 pointer-events-none
                            group-focus:opacity-100 group-focus:translate-y-0 group-focus:pointer-events-auto group-focus:flex
                        ">
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Авто 1</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Авто 2</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Авто 3</div>      
                        </div>
                    </button>
                    {/* Лучшие предложения*/}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Лучшие предложения
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Скидка 10% на CHERY Tiggo</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Подарок при покупке</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Бесплатная диагностика</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Трейд-ин выгодно</div>
                        </div>
                    </button>
                    {/* Автокредиты*/}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Автокредиты
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Кредит от 4,9%</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Рассрочка без переплат</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Онлайн-одобрение</div>
                        </div>
                    </button>
                    {/*Отзывы и рейтинги*/}
                    <button tabIndex={0} className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Отзывы и рейтинги
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Рейтинг дилеров</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Отзывы покупателей</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Оценка сервиса</div>
                        </div>
                    </button>
                    {/* Бургер меню для планшетов*/}
                    <div onClick={() => setSidebarOpen(!sidebarOpen)} className="px-4 lg:hidden flex items-center hover:scale-[1.05] cursor-pointer">
                        <Image src="/burger.svg" alt="Меню" height="36" width="36"/>
                    </div>

                    {/* Дополнительные блоки (подключаем их начиная с 1920px)*/}

                    {/*А*/}
                    <button className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group max-lg:hidden">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Дилеры
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Официальные дилеры</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Адреса дилеров</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Контакты</div>
                        </div>
                    </button>
                    <button className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group max-lg:hidden">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            О сервисе Bencars
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">О компании</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Преимущества сервиса</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Контакты</div>
                        </div>
                    </button>
                    <button className="relative flex gap-2 items-center px-4 py-[11px] rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-150 cursor-pointer group max-lg:hidden">
                        <span className="text-[16px] font-[500] tracking-[0.4px] leading-[1.3]">
                            Новости
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
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Новости сервиса</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Акции и события</div>
                            <div className="hover:bg-[var(--background)] transition-all duration-300 w-full p-4">Обновления сайта</div>
                        </div>
                    </button>
                </div>
            </div>
            {/* Overlay for sidebar*/}
            <div className={`fixed inset-0 bg-black/30 z-50 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`} onClick={() => setSidebarOpen(false)}></div>
            {/* Мобилка сайдбар*/}
            <div className={`fixed right-0 top-0 h-full w-[80vw] tablet:w-[50vw] bg-white z-60 flex flex-col gap-4 p-6 shadow-2xl ${sidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'} transition-all duration-300`}>
                {/* Выбор города на мобилках  */}
                <button onClick={() => setCityChooseModalOpened(true)} tabIndex={0} className="relative tablet:hidden flex gap-[4px] items-center py-[11px] rounded-[20px] focus:outline-[var(--green)] transition-all duration-150 cursor-pointer group">
                    <Image src="/Cursor.svg" alt="Cursor" width="24" height="24"/>
                    <span className="text-[15px] font-[500] tracking-[0.4px] leading-[1.3]">
                        {city}
                    </span>
                    <div className="group-focus:rotate-180 transition-all duration-300 ease">
                        <Image src="/chevron.svg" alt="Стрелка" width="24" height="24"/>
                    </div>
                </button>
                {/* Заказать звонок на мобилках */}
                <div className="tablet:hidden flex justify-between items-center">
                    <div className="text-[var(--foreground)] h-[40px] flex items-center gap-4">
                        <Image src="/view.svg" alt="Смотреть" width="40" height="40"/>
                        <div className="flex gap-2 text-[var(--foreground)] bg-[#E2E2E2] lg:pr-3 rounded-[20px]">
                            <Image src="/like.svg" alt="Лайк" width="40" height="40"/>
                            <span className="max-lg:hidden flex items-center">100</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => {
                            setBookCallModalOpened(true);
                        }} 
                        tabIndex={0} 
                        className="whitespace-nowrap bg-[var(--foreground)] hover:scale-[1.03] cursor-pointer focus:bg-[var(--green)] focus:text-[var(--foreground)] transition-all duration-300 rounded-[24px] px-4 py-[6px] text-white"
                    >
                        Заказать звонок
                    </button>
                </div>
                {/* Меню */}      
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Новые авто
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Лучшие предложения
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Автокредиты
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Отзывы и рейтинги
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Дилеры
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    О сервисе Bencars
                </button>
                <button tabIndex={0} className="w-full flex gap-2 items-center px-4 py-3 rounded-[20px] hover:bg-[var(--background)] focus:bg-[var(--green)] transition-all duration-300 cursor-pointer">
                    Новости
                </button>
            </div>
        </div>
        {/* Модальное окно Заказать звонок*/}
        <div className={`fixed left-0 top-0 w-screen h-screen z-999 ${isBookCallModalOpened ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Оверлей  */}
            <div className={`absolute left-0 top-0 w-full h-full bg-black ${isBookCallModalOpened ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300`}/>
            {/* Окно*/}
            <div className={`absolute left-0 top-0 w-full h-full flex justify-center items-center ${isBookCallModalOpened ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} transition-all duration-300`}>
                <div className="relative bg-white w-full h-full tablet:w-[600px] tablet:h-[430px] tablet:rounded-[36px] p-8">
                    <button
                        onClick={() => {
                            setBookCallModalOpened(false);
                        }}
                        className="absolute top-1 right-2 w-[48px] h-[48px] flex justify-center items-center text-[24px] text-gray-400 hover:scale-[1.2] transition-all duration-300 cursor-pointer"
                        aria-label="Закрыть"
                    >
                        &times;
                    </button>

                    <h1 className="font-[300] text-[36px] text-[var(--foreground)]">Заказать звонок</h1>
                    <div className="relative w-full flex flex-col gap-4 mt-5">
                        <p className="font-[400] text-[18px] leading-[1.3]">Оставьте номер телефона и наши менеджеры свяжутся с вами</p>
                        <input
                            className="w-full bg-[var(--background)] rounded-[28px] p-4 font-[400] text-[18px] leading-[1.3] text-[#8C8C8C]"
                            placeholder="Имя"
                        />
                        <input
                            type="tel"
                            pattern="\+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                            className="w-full bg-[var(--background)] rounded-[28px] p-4 font-[400] text-[18px] leading-[1.3] text-[#8C8C8C]"
                            placeholder="+7 ___ ___ __ __"
                            maxLength={12}
                        />
                        <button onClick={() => setBookCallModalOpened(!isBookCallModalOpened)} tabIndex={0} className="w-[142px] h-[56px] bg-[var(--green)] hover:scale-[1.03] cursor-pointer focus:bg-[var(--foreground)] focus:text-white transition-all duration-300 rounded-[28px] p-4 text-[var(--foreground)]">
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* Модальное окно Выберите город*/}
        <div className={`fixed left-0 top-0 w-screen h-screen z-999 ${isCityChooseModalOpened ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {/* Оверлей */}
            <div className={`absolute left-0 top-0 w-full h-full bg-black ${isCityChooseModalOpened ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300`} />
            {/* Окно*/}
            <div className={`absolute left-0 top-0 w-full h-full flex justify-center items-center ${isCityChooseModalOpened ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} transition-all duration-300`}>
                <div className="relative bg-white w-full h-full tablet:w-[600px] tablet:h-[430px] tablet:rounded-[36px] p-8">
                    <button
                        onClick={() => {
                            setCityChooseModalOpened(false);
                        }}
                        className="absolute top-1 right-2 w-[48px] h-[48px] flex justify-center items-center text-[24px] text-gray-400 hover:scale-[1.2] transition-all duration-300 cursor-pointer"
                        aria-label="Закрыть"
                    >
                        &times;
                    </button>
                    <div className="h-full flex flex-col gap-4">
                        <h1 className="font-[300] text-[36px] text-[var(--foreground)]">Выберете город</h1>
                        <input
                            value={searchCity}
                            type="text"
                            onChange={(e) => setSearchCity(e.target.value)}
                            className="w-full bg-[var(--background)] rounded-[28px] p-4 font-[400] text-[18px] leading-[1.3] text-[#8C8C8C]"
                            placeholder="Имя"
                        />
                        <div className="relative w-full h-full overflow-y-auto flex flex-col gap-4 mt-5">
                            {filteredCities.length > 0 ? (
                                filteredCities.map((map_city) => (
                                    <p 
                                        key={map_city}
                                        onClick={() => {
                                            setCity(map_city);
                                            setCityChooseModalOpened(false);
                                        }}
                                        className={`${map_city === city ? 'font-[700]' : 'font-[400]'} text-[18px] leading-[1.3] cursor-pointer hover:bg-[var(--background)] p-2 rounded-[12px]`}
                                    >
                                        {map_city}
                                    </p>
                                ))
                            ) : (
                                <p className="font-[400] text-[18px] leading-[1.3] text-gray-500">Таких городов не существует :)</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}