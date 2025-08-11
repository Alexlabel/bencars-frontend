import React, {createContext, useContext, useState, ReactNode} from 'react';

type CityContextType = {
    city: string;
    setCity: (city: string) => void;
    cities: string[];
};
const cities : string[] = ["респ. Адыгея", "респ. Калмыкия", "респ. Крым", "Краснодар", "Астраханская обл.", "Волгоградская обл." , "Ростовская обл."]
const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider = ({children} : {children: ReactNode}) => {
    const [city, setCity] = useState<string>(cities[0]);
    return (
        <CityContext.Provider value={{ city, setCity, cities }}>
            {children}
        </CityContext.Provider>
    )
};
export const useCity = () => {
    const context = useContext(CityContext);
    if (!context) throw new Error('useCity must be used within CityProvider');
    return context;
}