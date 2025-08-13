import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
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
    <View style={styles(props).container}>
      <View className="flex-1">
        <CustomTextInput hasIcon placeholder="Busque por nome..." {...props} />
      </View>
      {props.hasIcon && (
        <TouchableOpacity onPress={props.onPresseIcon}>
          <View style={styles(props).iconContainer}>
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

const styles = (props: TopInputCardProps) =>
  StyleSheet.create({
    container: {
      borderEndEndRadius: 30,
      borderStartEndRadius: 30,
      elevation: 5,
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
      padding: 35,
      backgroundColor: 'white',
    },
    iconContainer: {
      elevation: 5,
      backgroundColor: props.iconColor ?? '#1e3a8a',
      borderRadius: 9999,
      padding: 10,
    },
  });
