import Typography from 'typography';
import noriegaTheme from 'typography-theme-noriega';

noriegaTheme.headerFontFamily = ['Rubik', 'sans-serif'];
noriegaTheme.baseFontSize = '17px';
noriegaTheme.googleFonts = [
  {
    name: 'Rubik',
    styles: ['400', '700'],
  },
  {
    name: 'Pridi',
    styles: ['500', '700'],
  },
];

const typography = new Typography(noriegaTheme);

export default typography;
