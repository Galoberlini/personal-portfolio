'use client'

function ThemeButton ({theme, color}: {theme: string, color :string}) {
    const setTheme = () => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem('theme',theme);
    }
    return (
        <button onClick={() => setTheme()} >
            <div className="w-5 h-5 rounded-full border-2 border-text" style={{backgroundColor: color}} ></div>
        </button>
    )
}

export default function ChangeThemeButton() {
    return (
        <div className="flex h-10 w-20 justify-center gap-1 mr-5 rounded-lg">
           <ThemeButton theme="theme1" color="#ffa500"/>
           <ThemeButton theme="theme2" color="#12e391"/>
           <ThemeButton theme="theme3" color="#00ffff"/>
        </div>
    )
}