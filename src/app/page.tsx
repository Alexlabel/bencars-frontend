import MainPromoSlider from "@/components/blocks/MainPromoSlider";
import BrandsCatalog from "@/components/blocks/BrandsCatalog";
import Reviews from "@/components/blocks/Reviews";
import SeoText from "@/components/blocks/SeoText";
import FindCarForm from "@/components/blocks/FindCarForm";
import { getBrands } from "@/lib/api"; // ✅ добавили импорт

export default async function HomePage() {
    // ✅ Загружаем бренды из API
    const brands = await getBrands();

    return (
        <main className="max-w-7xl mx-auto px-4">
            {/* 1. Первый промо-блок со слайдером */}
            <MainPromoSlider />

            {/* 2. Блок с фильтрами */}
            <section className="my-10 bg-gray-100 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Найти новый автомобиль</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <input className="p-3 rounded" placeholder="Марка" />
                    <input className="p-3 rounded" placeholder="Модель" />
                    <input className="p-3 rounded" placeholder="Цена" />
                    <button className="bg-primary text-white p-3 rounded">Искать</button>
                </div>
            </section>

            {/* 3. Bencars это мост... */}
            <section className="my-10 text-center">
                <h2 className="text-2xl font-bold">
                    Bencars — это мост между дилерами и покупателями
                </h2>
                <p className="text-gray-600">
                    Мы помогаем выбрать лучший автомобиль по выгодной цене.
                </p>
            </section>

            {/* 4. Каталог брендов */}
            <section className="my-10">
                <h2 className="text-2xl font-bold mb-6">Каталог брендов</h2>
                {brands && brands.length > 0 ? (
                    <BrandsCatalog brands={brands} /> // ✅ теперь передаём brands
                ) : (
                    <p className="text-center text-gray-500">Бренды не найдены</p>
                )}
            </section>

            {/* 5. Как Bencars помогает */}
            <section className="my-10">
                <h2 className="text-2xl font-bold mb-4">
                    Как Bencars помогает с поиском автомобиля?
                </h2>
                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                    <li>Сравниваем цены в разных регионах</li>
                    <li>Показываем реальные предложения дилеров</li>
                    <li>Помогаем выбрать комплектацию</li>
                </ul>
            </section>
            
            {/* 6. Лучшие предложения */}
            <section className="my-10">
                <h2 className="text-2xl font-bold">Лучшие предложения</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-white rounded-xl shadow">
                        Chery Tiggo 7 — 2 200 000 ₽
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow">
                        Arizzo 8 — 1 350 000 ₽
                    </div>
                </div>
            </section>

            {/* 7. Автокредиты */}
            <section className="my-10 bg-primary text-white rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Автокредиты</h2>
                <p>Оформите кредит на автомобиль под выгодный процент прямо сейчас.</p>
            </section>

            {/* 9. Отзывы */}
            <Reviews />

            {/* 10. SEO-текст */}
            <SeoText />

            {/* 11. Форма Найти новый автомобиль */}
            <FindCarForm />
        </main>
    );
}