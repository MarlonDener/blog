export const theme = {
  colors: {
    primary: '#000000',
    darkText: '#333333',
    secondary: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      xsmall: '1.5rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
      max: '96rem',
      content: '90rem',
    },
  },
  media: {
    Medium: '(max-width: 768px)',
    Small: '(max-width: 360px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
