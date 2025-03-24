import React, { useState } from "react";

export const useTheme = (initTheme) => {
  const [theme, setTheme] = useState(initTheme);

  return { theme, setTheme };
};
