import React from 'react';

export type ThemeType = 'light' | 'dark' | 'auto';

export type ViewType = 'grid' | 'list';

export type SortType = 'stars' | 'forks' | 'size' | 'updated' | 'name' | 'quality';

export type SortItemType = {
  id: SortType;
  label: string;
};

export type TopReposType = {
  name: string;
  value: number;
};

export type LanguageType = {
  name: string;
  value: number;
};

export type StarsLanguageType = {
  name: string;
  value: number;
};

type IconType = React.ElementType;

export type ThemeButtonsType = {
  id: ThemeType;
  label: string;
  icons: {
    default?: IconType;
    desktop?: IconType;
    mobile?: IconType;
  };
};
