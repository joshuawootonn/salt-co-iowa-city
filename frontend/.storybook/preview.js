import React from 'react'

import ThemeContext, { primaryTheme } from "../src/context/themeContext"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}



export const decorators = [
  (Story) => (
    <ThemeContext theme={primaryTheme}>
      <Story />
    </ThemeContext>
  ),
];