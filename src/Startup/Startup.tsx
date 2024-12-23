import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';

import { SupportedLanguages } from '@/hooks/language/schema';

import { SafeScreen } from '@/components/templates';

import BaseButton from '@/components/commun/BaseButton';
import Box from '@/components/commun/Box';
import Text from '@/components/commun/Text';
import { appLanguageAtom } from '@/store/appState';

function Startup() {
  const { t } = useTranslation();
  const [lang, setLanguage] = useAtom(appLanguageAtom);
  const { isError, isLoading } = useQuery('fetchTest', () =>
    Promise.resolve(true),
  );

  return (
    <SafeScreen>
      <Box
        backgroundColor="mainBackground"
        p="m"
        flex={1}
        justifyContent="center"
      >
        <Text variant="header">{t('screen_example.title')}</Text>
        <Text variant="body">{t('screen_example.description')}</Text>
        <BaseButton
          onPress={() =>
            setLanguage(
              lang === SupportedLanguages.EN_EN
                ? SupportedLanguages.AR
                : SupportedLanguages.EN_EN,
            )
          }
        >
          <Text>Change lang</Text>
        </BaseButton>
        {isLoading && <ActivityIndicator size="large" />}
        {isError && <Text>{t('common_error')}</Text>}
      </Box>
    </SafeScreen>
  );
}

export default Startup;
