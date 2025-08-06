const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/api";

// Универсальный fetcher
async function fetchAPI(endpoint: string, params: string = "") {
    const res = await fetch(`${API_URL}${endpoint}${params}`, {
        headers: { "Content-Type": "application/json" },
        cache: "no-store", // или next: { revalidate: 60 } для ISR
    });

    if (!res.ok) {
        console.error(`Ошибка API: ${res.status} ${res.statusText}`);
        return null;
    }

    const data = await res.json();
    return data.data;
}

// ✅ Бренды для каталога
export async function getBrands() {
    const data = await fetchAPI("/brands?populate=logo");
    if (!data) return [];
    return data.map((brand: any) => ({
        id: brand.id,
        name: brand.attributes.name,
        logo: brand.attributes.logo?.data?.attributes?.url
            ? `${API_URL.replace('/api', '')}${brand.attributes.logo.data.attributes.url}`
            : "/default-logo.png",
    }));
}

// ✅ ВСЕ ПРОМО-СТРАНИЦЫ (для генерации маршрутов)
export async function getAllPromoPages() {
    const data = await fetchAPI("/promo-pages?populate=brand");

    if (!data) return [];

    return data.map((item: any) => ({
        region: item.attributes.region,
        brand: item.attributes.brand?.data?.attributes?.slug || "",
    }));
}

// ✅ Промо-страница по региону и бренду
export async function getPromoPage(region: string, brand: string) {
    const data = await fetchAPI(
        `/promo-pages?filters[region][slug][$eq]=${region}&filters[brand][slug][$eq]=${brand}&populate[slides][populate]=image&populate[models][populate]=image&populate[trims]=*`
    );

    if (!data || data.length === 0) return null;

    const promo = data[0].attributes;

    return {
        title: promo.title,
        description: promo.description,
        compareText: promo.compareText,
        slides:
            promo.slides?.map((slide: any) => ({
                id: slide.id,
                title: slide.title,
                description: slide.description,
                image: {
                    url: slide.image?.data?.attributes?.url
                        ? `${API_URL.replace('/api', '')}${slide.image.data.attributes.url}`
                        : "",
                },
            })) || [],
        models:
            promo.models?.map((model: any) => ({
                id: model.id,
                name: model.name,
                description: model.description,
                image: {
                    url: model.image?.data?.attributes?.url
                        ? `${API_URL.replace('/api', '')}${model.image.data.attributes.url}`
                        : "",
                },
            })) || [],
        trims:
            promo.trims?.map((trim: any) => ({
                id: trim.id,
                name: trim.name,
                price: trim.price,
            })) || [],
    };
}