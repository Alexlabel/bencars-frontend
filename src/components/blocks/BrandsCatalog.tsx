import Image from "next/image";
export interface Brand {
    id: number;
    name: string;
    logo: string;
}

interface BrandsCatalogProps {
    brands: Brand[];
}

export default function BrandsCatalog({ brands }: BrandsCatalogProps) {
    return (
        <div className="relative w-full">
            <h1 className="text-[28px] tablet:text-[42px] font-[300] text-[var(--foreground)] mb-10">Каталог брендов новых авто в Ростове-на-Дону</h1>
            <div className="relative w-full flex flex-wrap gap-4 ">
                {brands.map((brand) => (
                    <div key={brand.id} className="w-[120px] h-[60px] flex flex-col justify-center items-center">
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                        <span className="text-[18px] mt-2 text-sm font-medium">{brand.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

