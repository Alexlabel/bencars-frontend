export default function Reviews() {
    const reviews = [
        { id: 1, name: "Алексей", text: "Купил Chery Tiggo 7 дешевле на 150 000 ₽" },
        { id: 2, name: "Марина", text: "Отличный сервис, помогли выбрать дилера" },
    ];

    return (
        <section className="my-10">
            <h2 className="text-2xl font-bold mb-4">Отзывы покупателей</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="p-4 bg-white rounded-xl shadow text-gray-700"
                    >
                        <p className="italic">"{review.text}"</p>
                        <p className="mt-2 font-semibold">— {review.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}