const breakpoints = {
  minimum: 330,
  mobile: 800,
  header: 1240,
} as const;

const mq = (max: number, min = 250) =>
  `@media all and (min-width: ${min}px) and (max-width: ${max}px)`;

export const customMQ = mq(breakpoints.mobile);
export const headerMQ = mq(breakpoints.header);
export const minimumMQ = mq(breakpoints.minimum);

export type AppTheme = {
  colors: {
    background: string;
    surface: string;
    black_200: string;
    black_400: string;
    darkgray_100: string;
    darkgray_300: string;
    darkgray_800: string;
    lightgray_500: string;
    text_1000: string;
    lightprimary_500: string;
    primary_1000: string;
    white_1000: string;
  };
};

export const theme: AppTheme = {
  colors: {
    background: 'rgba(255, 255, 255, 1)',
    surface: 'rgba(255, 255, 255, 0.7)',
    black_200: 'rgba(0, 0, 0, 0.2)',
    black_400: 'rgba(0, 0, 0, 0.4)',
    darkgray_100: 'rgba(98, 92, 96, 0.1)',
    darkgray_300: 'rgba(98, 92, 96, 0.3)',
    darkgray_800: 'rgba(98, 92, 96, 0.8)',
    lightgray_500: 'rgba(241, 237, 233, 0.5)',
    text_1000: 'rgba(41, 40, 45, 1)',
    lightprimary_500: 'rgba(170, 255, 0, 0.2)',
    primary_1000: 'rgba(170, 255, 0, 1)',
    white_1000: 'rgba(255, 255, 255, 1)',
  },
};

export const darkTheme: AppTheme = {
  colors: {
    background: 'rgba(24, 24, 27, 1)',
    surface: 'rgba(24, 24, 27, 0.85)',
    black_200: 'rgba(255, 255, 255, 0.1)',
    black_400: 'rgba(255, 255, 255, 0.25)',
    darkgray_100: 'rgba(255, 255, 255, 0.06)',
    darkgray_300: 'rgba(255, 255, 255, 0.15)',
    darkgray_800: 'rgba(180, 176, 182, 0.9)',
    lightgray_500: 'rgba(40, 40, 45, 0.9)',
    text_1000: 'rgba(230, 228, 232, 1)',
    lightprimary_500: 'rgba(170, 255, 0, 0.15)',
    primary_1000: 'rgba(170, 255, 0, 1)',
    white_1000: 'rgba(255, 255, 255, 1)',
  },
};
