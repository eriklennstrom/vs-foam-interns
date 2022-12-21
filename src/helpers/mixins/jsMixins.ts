// Variants
export const badgeVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success'
];
export const buttonVariant = [
  'primary',
  'secondary',
  'danger',
  'danger-outline',
  'ghost'
];
export const iconVariant = [
  'warning',
  'circle-down',
  'user-secret',
  'arrow-down',
  'arrow-alt-circle-down'
];

// Colors
export const iconColors = ['success', 'danger', 'secondary', 'primary'];

export const defaultVariantMixin = (variants: string[]) => ({
  variant: variants,
  verifyVariant(probablyVariant: string) {
    return this.variant.includes(probablyVariant);
  }
});

export const defaulColorMixin = (colors: string[]) => ({
  colors: colors,
  verifyColor(probablyColor: string) {
    return this.colors.includes(probablyColor);
  }
});
