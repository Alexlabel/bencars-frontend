import { getPromoPage, getAllPromoPages } from "@/lib/api";
import type { Metadata } from "next";
import PromoPage from "@/components/pages/PromoPage";

export interface PageParams {
    region: string;
    brand: string;
}

// ✅ Тип для страницы
interface PromoPagePath {
    region: string;
    brand: string;
}

// ✅ Генерация маршрутов на этапе билда
export async function generateStaticParams(): Promise<PromoPagePath[]> {
    const promos = await getAllPromoPages();

    return promos.map((pages: PromoPagePath) => ({
        region: pages.region,
        brand: pages.brand,
    }));
}

// ✅ SEO метаданные
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
    const { region, brand } = params;
    const promo = await getPromoPage(region, brand);

    if (!promo) {
        return {
            title: "Страница не найдена",
            description: "Промо-страница не найдена",
        };
    }

    return {
        title: promo.title,
        description: promo.description || `Промо-страница бренда ${brand} для региона ${region}`,
    };
}

// ✅ Рендер страницы
export default async function PromoPageWrapper({ params }: { params: PageParams }) {
    const { region, brand } = params;
    const promoData = await getPromoPage(region, brand);

    if (!promoData) {
        return <div className="p-10 text-center text-xl">Страница не найдена</div>;
    }

    return <PromoPage data={promoData} />;
}