import React, { PropsWithChildren, createContext, useState } from "react";
import { Theme, orangeThemeDark } from "../theme/theme";
import { themeData } from "../data/themeData";

const ThemeContext = createContext<any>(null);

function ThemeContextProvider(props: any) {

    console.log(themeData)
    const [theme, setTheme] = useState<Theme>(themeData);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const defaultValue = {
        theme: orangeThemeDark,
        drawerOpen: false,
        setHandleDrawer
    }
    const value = { theme, setTheme, drawerOpen, setHandleDrawer };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext };
export default ThemeContextProvider;