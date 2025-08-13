import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { ReactNode } from 'react';

type CustomButtonType = TouchableOpacityProps & {
  children: ReactNode;
  className?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  bgColor?: string;
  height?: number;
};

export default function CustomButton({
  children,
  className,
  onPress,
  bgColor,
  height,
  ...rest
}: CustomButtonType) {
  return (
    <TouchableOpacity {...rest} onPress={onPress}>
      <View
        style={[
          buttonStyle,
          {
            backgroundColor: rest.disabled ? '#a1a1aa' : bgColor ?? '#1e3a8a',
            height: height ?? 60,
          },
        ]}
        className={`${className}`}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

const buttonStyle: StyleProp<ViewStyle> = {
  borderRadius: 99999,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 40,
  elevation: 5,
};
