import { atomWithMMKV } from "@/config/store/atomWithMMKV";
import { SupportedLanguages } from "@/hooks/language/schema";

export const appLanguageAtom = atomWithMMKV<SupportedLanguages>(
    'language',
    SupportedLanguages.EN_EN
  );