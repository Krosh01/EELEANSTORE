import React from 'react'

//IMPORT THEME TOGGLE AND CONTEXT
import Toggle from './toggle'
import { ThemeContext , themes} from '../utils/ThemeContext'

const ThemeBtn = () => {

    return (
        <ThemeContext>
            {({ theme, setTheme }) => (
                <Toggle
                    onChange={() => {
                        if (theme === themes.light) setTheme(themes.dark)
                        if (theme === themes.dark) setTheme(themes.light)
                    }}
                    value={theme === themes.dark}
                />
            )}
        </ThemeContext>
    )
}

export default ThemeBtn