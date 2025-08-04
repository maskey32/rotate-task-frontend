"use client";

import { useEffect, useState } from "react";

import { ThemeContext } from "../context";

export default function ThemeProvider({ 
    children 
}: ILayoutProps) {
    const [theme, setTheme] = useState<ThemeType>("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeType | null;

        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setTheme(systemTheme);
        }
     }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};