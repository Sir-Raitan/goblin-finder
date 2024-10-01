//https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#sorting-classes-in-template-literals
//basically enables tailwind prettier in other places other than className (afaik there is no option to enable it based on regex)
//eslint-disable-next-line
export const tw = (strings: TemplateStringsArray, ...values: any[]): string => {
  return String.raw({ raw: strings }, ...values);
};
