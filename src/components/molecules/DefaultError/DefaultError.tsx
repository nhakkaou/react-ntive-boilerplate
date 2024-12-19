import { useErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';



type Props = {
  onReset?: () => void;
};

function DefaultErrorScreen({ onReset = undefined }: Props) {
  const { t } = useTranslation();
  const { resetBoundary } = useErrorBoundary();

  return (
    <View>
      <Text>{t('error_boundary.title')}</Text>
      <Text>{t('error_boundary.description')}</Text>

      {onReset && (
        <TouchableOpacity
          onPress={() => {
            resetBoundary();
            onReset?.();
          }}
        >
          <Text>{t('error_boundary.cta')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default DefaultErrorScreen;
