import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({})

export const CustomizationProvider = (props) => {
    const [materialDKa, setMaterialDKa] = useState('/texture/default/kawung.png')
    const [materialKe, setMaterialKe] = useState('/texture/default/kawung.png')
    const [materialDKi, setMaterialDKi] = useState('/texture/default/kawung.png')
    const [materialKa, setMaterialKa] = useState('/texture/default/kawung.png')
    const [filter, setFilter] = useState('semua')
    return (
        <CustomizationContext.Provider value={{
            materialDKa,
            setMaterialDKa,
            materialKe,
            setMaterialKe,
            materialDKi,
            setMaterialDKi,
            materialKa,
            setMaterialKa,
            filter,
            setFilter
        }}>
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext)
    return context
}