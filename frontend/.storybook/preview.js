import React from 'react'

import ThemeContext, { primaryTheme } from "../src/context/themeContext"
import  { FontLoadedProviderComponent } from "../src/context/fontLoader"

// https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-639014099
global.__BASE_PATH__ = '';
global.__PATH_PREFIX__ = '';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <FontLoadedProviderComponent>
      <ThemeContext theme={primaryTheme}>
        <Story />
      </ThemeContext>
    </FontLoadedProviderComponent>
  ),
];