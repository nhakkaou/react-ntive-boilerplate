import 'react-native-gesture-handler';

import { Provider as JotaiProvider } from 'jotai';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';
import { QueryClient, QueryClientProvider } from 'react-query';

import ApplicationNavigator from '@/navigation/Application';

import '@/translations';

export const queryClient = new QueryClient({ 
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 1000 * 3600 * 24, // 24 hours
    },
  },
});

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <ApplicationNavigator />
        </JotaiProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
