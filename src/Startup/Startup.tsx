import type { RootScreenProps } from '@/navigation/types';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from 'react-query';

import { Paths } from '@/navigation/paths';

import { SafeScreen } from '@/components/templates';

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { t } = useTranslation();

  const { isError, isLoading, isSuccess } = useQuery('fetchTest', () =>
    Promise.resolve(true),
  );

  useEffect(() => {
    if (isSuccess) {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.Example }],
      });
    }
  }, [isSuccess, navigation]);

  return (
    <SafeScreen>
      <View>
        {isLoading && <ActivityIndicator size="large" />}
        {isError && <Text>{t('common_error')}</Text>}
      </View>
    </SafeScreen>
  );
}

export default Startup;
