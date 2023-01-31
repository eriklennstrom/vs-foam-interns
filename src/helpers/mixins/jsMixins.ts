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

export const iconVariants = ['success', 'danger', 'secondary', 'primary'];

export const chipVariants = ['input', 'filter'];

export const dropdownItemTypes = ['button', 'route', 'link']
export const dropdownFilterTypes = ['checkbox', 'color', 'container']
export const dropdownRoles = ['button', 'input']
export const dropdownInputPosition = ['top', 'inside']

// icon names

export const validIconNames = [
  'caret-down',
  'warning',
  'circle-down',
  'user-secret',
  'arrow-down',
  'arrow-alt-circle-down',
  'check',
  'xmark'
];

export const defaultTypeMixin = (types: string[]) => ({
  type: types,
  verifyType(probablyType: string) {
    return this.type.includes(probablyType);
  }
});

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
