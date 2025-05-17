import { FC, useState, useEffect } from "react";

import { SunFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;

}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  // Siempre tema claro, solo muestra el ícono de sol (opcional)
  return (
    <div className={className}>
      <SunFilledIcon size={22} />
    </div>
  );
};

 