// app/brands/page.tsx
import { getBrands } from "@/lib/api";
import BrandsCatalog from "@/components/blocks/BrandsCatalog";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Каталог брендов",
    description: "Все бренды в нашем автосалоне",
};

export default async function BrandsPage() {
    const brands = await getBrands();

    if (!brands || brands.length === 0) {
        return <div className="p-10 text-center text-xl">Бренды не найдены</div>;
    }

    return (
        <main className="max-w-7xl mx-auto px-4 my-10">
            <h1 className="text-3xl font-bold mb-6">Наши бренды</h1>
            {/* ✅ теперь brands передаём */}
            <BrandsCatalog brands={brands} />
        </main>
    );
}