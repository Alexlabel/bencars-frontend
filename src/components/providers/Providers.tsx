"use client";

import { CityProvider } from "./useCity";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <CityProvider>
            {children}
        </CityProvider>
    );
}
