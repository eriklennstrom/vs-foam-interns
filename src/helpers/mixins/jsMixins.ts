// Variants
export const badgeVariant = [
  'primary',
  'secondary',
  'danger',
  'warning',
  'success'
];

export const inputSize = [
  'S',
  'M',
  'L',
];

export const buttonVariant = [
  'primary',
  'secondary',
  'danger',
  'danger-outline',
  'ghost'
];

export const inputVariant = [
  'text',
  'number',
  'email',
  'password',
  'low-number'
];

export const iconVariants = ['success', 'danger', 'secondary', 'primary'];

export const chipVariants = ['input', 'filter'];

// icon names

export const validIconNames = [
  'check',
  'caret-down',
  'warning',
  'circle-down',
  'user-secret',
  'arrow-down',
  'arrow-alt-circle-down',
  'check',
  'xmark',
  'eye-slash',
  'eye'

  
];

export const defaultVariantMixin = (variants: string[]) => ({
  variant: variants,
  verifyVariant(probablyVariant: string) {
    return this.variant.includes(probablyVariant);
  }
});

export const defaultNameMixin = (names: string[]) => ({
  names: names,
  verifyName(probablyName: string) {
    return this.names.includes(probablyName);
  }
});
