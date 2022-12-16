export const badgeMixin = {
  variant: ["primary", "secondary", "danger", "warning", "success"],
  verifyVariant(probablyVariant: string) {
   return this.variant.includes(probablyVariant);
  },
};

export const chipMixin = {
  variant: ["select", "remove"],
  verifyVariant(probablyVariant: string) {
    this.variant.includes(probablyVariant);
  },
};

export const buttonMixin = {
  variant: ["primary", "secondary", "danger", "danger-outline", "ghost"],
  verifyVariant(probablyVariant: string) {
    this.variant.includes(probablyVariant);
  },
};
