import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';
import CustomTextInput, { CustomTextInputType } from './CustomTextInput';
import Feather from 'react-native-vector-icons/Feather';

type TopInputCardProps = CustomTextInputType & {
  iconName?: string;
  iconColor?: string;
  hasIcon?: boolean;
  onPresseIcon?: ((event: GestureResponderEvent) => void) | undefined;
};

export default function TopInputCard(props: TopInputCardProps) {
  return (
    <View
      style={{
        borderEndEndRadius: 30,
        borderStartEndRadius: 30,
        elevation: 5,
      }}
      className="bg-white p-10 flex flex-row gap-4 items-center"
    >
      <CustomTextInput
        hasIcon
        className="w-full flex-1"
        placeholder="Busque por nome..."
        {...props}
      />
      {props.hasIcon && (
        <TouchableOpacity onPress={props.onPresseIcon}>
          <View
            style={{
              elevation: 5,
              backgroundColor: props.iconColor ?? '#1e3a8a',
            }}
            className={`rounded-full p-3`}
          >
            {
              <Feather
                name={props.iconName ?? 'list'}
                size={24}
                color={'white'}
              />
            }
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}
