import { Image, KeyboardAvoidingView, SafeAreaView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  BodyText,
  ButtonText,
  HeadText,
  TitleText2,
} from '../components/CustomText';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

export default function LoginScreen({ navigation }: any) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="min-h-full flex flex-col justify-end bg-[#20722C]"
    >
      <LinearGradient className="flex-1 p-10" colors={['#315FB5', '#20722C']}>
        <HeadText className="text-white">Olá!</HeadText>
        <BodyText className="text-white">Boas vindas a SouFacil</BodyText>
        <Image
          source={require('../assets/imgs/login.png')}
          className="size-[290px] absolute bottom-0 inset-x-[15%]"
        />
      </LinearGradient>

      <View className="justify-center items-stretch bg-white p-10 gap-8 rounded-t-[50px]">
        <TitleText2>Login</TitleText2>
        <View className="gap-2">
          <BodyText>Email</BodyText>
          <KeyboardAvoidingView behavior="height">
            <CustomTextInput placeholder="joao@mail.com" />
          </KeyboardAvoidingView>
        </View>
        <View className="gap-2">
          <BodyText>Senha</BodyText>
          <CustomTextInput placeholder="##########" secureTextEntry />
        </View>
        <CustomButton
          onPress={() => {
            navigation.replace('NavIndex');
          }}
        >
          <ButtonText className="text-white">Entrar</ButtonText>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
