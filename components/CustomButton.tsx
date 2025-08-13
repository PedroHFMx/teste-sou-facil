import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ReactNode } from 'react';

type CustomButtonType = {
  children: ReactNode;
  className?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  bgColor?: string;
  height?: number;
};

export default function CustomButton(props: CustomButtonType) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          buttonStyle,
          {
            backgroundColor: props.bgColor ?? '#1e3a8a',
            height: props.height ?? 60,
          },
        ]}
        className={`${props.className}`}
      >
        {props.children}
      </View>
    </TouchableOpacity>
  );
}

const buttonStyle: StyleProp<ViewStyle> = {
  minWidth: '100%',
  borderRadius: 99999,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 40,
  elevation: 5,
};
