import {
    createBox,
  } from '@shopify/restyle';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { Theme } from '@/theme/theme';
  
const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);
export default BaseButton