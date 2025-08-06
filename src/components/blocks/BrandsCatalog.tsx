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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand) => (
                <div key={brand.id} className="flex flex-col items-center">
                    <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                    <p className="mt-2 text-sm font-medium">{brand.name}</p>
                </div>
            ))}
        </div>
    );
}

