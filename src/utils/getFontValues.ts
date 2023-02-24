type responsiveFontSizesProps = { sm: number; md: number; lg: number };
type createGradientProps = { firstColor: string; secondColor: string };

export const pxToRem = (value: number) => `${value / 16}rem`;
export const responsiveFontSizes = ({ sm, md, lg }: responsiveFontSizesProps) => ({
  '@media (min-width:600px)': {
    fontSize: pxToRem(sm),
  },
  '@media (min-width:900px)': {
    fontSize: pxToRem(md),
  },
  '@media (min-width:1200px)': {
    fontSize: pxToRem(lg),
  },
});

export const createGradient = ({ firstColor, secondColor }: createGradientProps) =>
  `linear-gradient(to bottom, ${firstColor}, ${secondColor})`;
