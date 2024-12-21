import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Text, View } from 'react-native';
import { useQuery } from 'react-query';

import { SafeScreen } from '@/components/templates';

function Startup() {
  const { t } = useTranslation();

  const { isError, isLoading } = useQuery('fetchTest', () =>
    Promise.resolve(true),
  );


  return (
    <SafeScreen> 
      <View style={{backgroundColor: 'yellow', flex: 1, height: '100%'}}>
        <Text>Hola</Text>
        {isLoading && <ActivityIndicator size="large" />}
        {isError && <Text>{t('common_error')}</Text>}
      </View>
    </SafeScreen>
  );
}

export default Startup;
