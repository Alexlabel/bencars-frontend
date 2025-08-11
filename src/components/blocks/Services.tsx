import './css/services.css';
import DividerLine from './DividerLine';
import { useState, forwardRef, useRef } from 'react';
import { services } from '../data/services';
import Modal from './ModalForm';
import ReactDOM from 'react-dom';

export const Services = forwardRef((props, ref) => {
    const scrollRef = useRef(null);
    const cardsPerPage = 1;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToCard = (cardIndex) => {
        const container = scrollRef.current;
        const cards = container.querySelectorAll('.services-card');
        const card = cards[cardIndex];
        if (card && container) {
            const containerRect = container.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            const offset = cardRect.left - containerRect.left - (container.offsetWidth / 2) + (card.offsetWidth / 2);
            container.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    const scrollToPage = (pageIndex) => {
        const targetIndex = pageIndex * cardsPerPage;
        scrollToCard(targetIndex);
        const selectedCardId = services[targetIndex]?.id;
        if (selectedCardId !== undefined) {
            select_service_id(selectedCardId);
        }
        setCurrentPage(pageIndex);
    };

    const [selected_service_id, select_service_id] = useState(services[0]?.id ?? null);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(services.length / cardsPerPage);

    const handlePrev = () => {
        select_service_id((prev) => {
            const currentIndex = services.findIndex(s => s.id === prev);
            const newIndex = Math.max(currentIndex - 1, 0);
            scrollToCard(newIndex);
            setCurrentPage(Math.floor(newIndex / cardsPerPage));
            return services[newIndex].id;
        });
    };

    const handleNext = () => {
        select_service_id((prev) => {
            const currentIndex = services.findIndex(s => s.id === prev);
            const newIndex = Math.min(currentIndex + 1, services.length - 1);
            scrollToCard(newIndex);
            setCurrentPage(Math.floor(newIndex / cardsPerPage));
            return services[newIndex].id;
        });
    };

    return (
        <div ref={ref} className="services-container">
            <h3 className="services-title">УСЛУГИ</h3>
            <div className="services-cards-wrapper">
                <div className="services-cards" ref={scrollRef}>
                    {services.map(service => (
                        <div
                            className={`services-card ${service.id === selected_service_id ? "selected" : ""}`}
                            key={service.id}
                        >
                            <p className="service_title clamp-3">{service["Название"]}</p>
                            <div className="service-info">
                                <img src={service["Изображение"]} alt="Сервис услуга" className='service-img' />
                                <div className='service-price-wrapper'>
                                    <div className="service-price">
                                        <DividerLine />
                                        от {service['Цена']} ₽
                                    </div>
                                </div>
                                <div className='service-description'>
                                    {service['Описание']}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handlePrev}
                className="prev-button"
                disabled={selected_service_id === services[0]?.id}
            >
                <img src="/arrow-left.png" alt="Стрелка влево" />
            </button>

            <button
                onClick={handleNext}
                className="next-button"
                disabled={selected_service_id === services[services.length - 1]?.id}
            >
                <img src="/arrow-right.png" alt="Стрелка вправо" />
            </button>

            <div className='scrolls'>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <img
                        key={i}
                        src={i === currentPage ? "/vectors/circleFilled.png" : "/vectors/circle.png"}
                        alt="Пагинация"
                        onClick={() => scrollToPage(i)}
                        className="indicator-dot"
                    />
                ))}
            </div>

            <div className='form-button'>
                <button onClick={() => setIsModalOpen(true)}>Оставить заявку</button>
            </div>

            {isModalOpen && ReactDOM.createPortal(
                <Modal onClose={() => setIsModalOpen(false)} selectedServiceId={selected_service_id}/>,
                document.body
            )}
        </div>
    );
});
