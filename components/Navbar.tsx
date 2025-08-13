import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function Navbar({ state, navigation }: BottomTabBarProps) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        elevation: 5,
      }}
      className="flex flex-row justify-around bg-white"
    >
      {state.routes.map((route, index) => {
        const sameIndex = state.index == index;
        return (
          <TouchableOpacity
            disabled={sameIndex}
            onPress={() => navigation.navigate(route.name)}
            key={route.key}
          >
            <View
              style={{
                borderRadius: 20,
                padding: 14,
                backgroundColor: sameIndex ? '#1e3a8a' : 'white',
              }}
            >
              <Feather
                name={`${
                  index == 0
                    ? 'user'
                    : index == 1
                    ? 'shopping-bag'
                    : index == 2
                    ? 'inbox'
                    : 'users'
                }`}
                color={`${sameIndex ? 'white' : 'black'}`}
                size={22}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
