import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export type CustomTextInputType = TextInputProps & {
  className?: string;
  hasIcon?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
  iconOnPress?: ((event: GestureResponderEvent) => void) | undefined;
};

export default function CustomTextInput({
  className,
  hasIcon,
  iconOnPress,
  onChangeText,
  ...rest
}: CustomTextInputType) {
  return (
    <View className={`flex flex-row ${className}`} style={styles.container}>
      <TextInput
        cursorColor={'black'}
        style={styles.input}
        placeholderTextColor={'gray'}
        multiline={false}
        numberOfLines={1}
        onChangeText={onChangeText}
        {...rest}
      />
      {hasIcon ? (
        <TouchableOpacity onPress={iconOnPress}>
          <View style={styles.touchableOpacity}>
            <Icon name="search" size={20} color="black" style={styles.icon} />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 99999,
    height: 50,
    elevation: 3,
    backgroundColor: 'white',
  },
  touchableOpacity: {
    height: '100%',
    paddingRight: 30,
  },
  input: {
    borderRadius: 9999,
    paddingHorizontal: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    includeFontPadding: false,
    color: 'black',
    flex: 1,
  },
  icon: {
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});
