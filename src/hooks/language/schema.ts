import { z } from 'zod';

export const enum SupportedLanguages {
  EN_EN = 'en-EN',
  AR = 'ar',
}

export const languageSchema = z.enum([
  SupportedLanguages.EN_EN,
  SupportedLanguages.AR,
]);

export type Language = z.infer<typeof languageSchema>;
