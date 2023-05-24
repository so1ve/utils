// Adjusted from pupa
import { htmlEscape } from "escape-goat";

export class MissingValueError extends Error {
  constructor(public key: string) {
    super(
      `Missing a value for ${
        key ? `the placeholder: ${key}` : "a placeholder"
      }`,
    );
  }
}

export interface Options {
  ignoreMissing?: boolean;
  transform?: (data: { value: unknown; key: string }) => unknown;
}

const doubleBraceRegex = /\{\{(\d+|[a-z$_][\w\-$]*(?:\.[\w\-$]*)*)\}\}/gi;
const braceRegex = /\{(\d+|[a-z$_][\w\-$]*(?:\.[\w\-$]*)*)\}/gi;

export function template(
  template: string,
  data: Record<string, any>,
  { ignoreMissing = false, transform = ({ value }) => value }: Options = {},
) {
  function replace(placeholder: string, key: string) {
    let value = data;
    for (const property of key.split(".")) {
      value = value ? value[property] : undefined;
    }

    const transformedValue = transform({ value, key });
    if (transformedValue === undefined) {
      if (ignoreMissing) {
        return placeholder;
      }

      throw new MissingValueError(key);
    }

    return String(transformedValue);
  }

  const composeHtmlEscape =
    (replacer: (...args: string[]) => string) =>
    (...args: string[]) =>
      htmlEscape(replacer(...args));

  if (doubleBraceRegex.test(template)) {
    template = template.replace(doubleBraceRegex, composeHtmlEscape(replace));
  }

  return template.replace(braceRegex, replace);
}
