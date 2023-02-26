import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('currentTheme'),'light')

    useLayoutEffect(() => {
        document.documentElement.setAttribute('currentTheme', theme)
        localStorage.setItem('currentTheme', theme)
    }, [theme])

    return {theme, setTheme}
}