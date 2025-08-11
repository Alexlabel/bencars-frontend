"use client";
import { useState } from "react";
import MainPromoSlider from "@/components/blocks/MainPromoSlider";
import BrandsCatalog from "@/components/blocks/BrandsCatalog";
import Reviews from "@/components/blocks/Reviews";
import SeoText from "@/components/blocks/SeoText";
import FindCarForm from "@/components/blocks/FindCarForm";
import { getBrands } from "@/lib/api"; 
import { Headers } from "@/components/layout/Header";
import { CityProvider } from "@/components/providers/useCity";
import { BencarsIsBridge } from "@/components/blocks/BencarsIsBridge";
import { BencarsHelp } from "@/components/blocks/BencarsHelp";
import { PriceComparison } from "@/components/blocks/PriceComparison";
import { BestOffers } from "@/components/blocks/BestOffers";
import { AutoCredits } from "@/components/blocks/AutoCredits";
import { FindCarFormBottom } from "@/components/blocks/FindCarFormBottom";
import { Footbar } from "@/components/layout/Footbar";
import BrandsPage from "./brands/page";
import PromoPageWrapper from "./region/brand/page";
import { useCity } from "@/components/providers/useCity";
import PromoPage from "@/components/pages/PromoPage";
export default async function HomePage() {
    // ✅ Загружаем бренды из API
    const brands = await getBrands();
    return (
        <CityProvider>
            <div className="w-full max-w-[1620px] max-lg:max-w-[1280px] mx-auto md:px-8 bg-[#F2F2F2]">
                <Headers />
                
                {/* // основной контент */}
                <main className="w-full bg-[#F2F2F2]">
                    {/* 1. Первый промо-блок со слайдером */}
                    <MainPromoSlider />

                    {/* 2. Блок с фильтрами */}
                    <FindCarForm />

                    {/* 3. Bencars это мост... */}
                    <BencarsIsBridge />

                    {/* 4. Каталог брендов */}
                    <div className="red py-24">
                        <BrandsCatalog brands={brands}/>
                    </div>
                    {/* 5. Как Bencars помогает */}
                    <BencarsHelp />

                    {/* 6. Сравнение цен на новые авто */ }
                    <PriceComparison />
                    
                    {/* 7. Лучшие предложения */}
                    <BestOffers />

                    {/* 8. Автокредиты */}
                    <AutoCredits />

                    {/* 10. Отзывы */}
                    <Reviews />

                    {/* 11. SEO-текст */}
                    <SeoText />

                    {/* 12. Форма Найти новый автомобиль */}
                    <FindCarFormBottom />
                    
                    {/* 13. Футбар */}
                    <Footbar />
                </main>
            </div>
        </CityProvider>
    );
}