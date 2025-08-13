import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import CustomButton from './CustomButton';
import { TitleText3, BodyText } from './CustomText';
import CustomTextInput from './CustomTextInput';
import Feather from 'react-native-vector-icons/Feather';
import { User } from '../utils/Users';

export default function SaleModal(props: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  user?: User;
}) {
  return (
    <Modal
      visible={props.visible}
      animationType="fade"
      onRequestClose={() => props.setVisible(false)}
      transparent
    >
      <TouchableWithoutFeedback onPress={() => props.setVisible(false)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 30,
              width: '80%',
              gap: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TitleText3>Cadastrar Venda</TitleText3>
              <Feather name="x" size={22} />
            </View>
            <BodyText>Cadastrando para: {props.user?.name}</BodyText>
            <View className="gap-2">
              <BodyText>Data</BodyText>
              <CustomTextInput placeholder="22/05/2025" />
            </View>
            <View className="gap-2">
              <BodyText>Valor</BodyText>
              <CustomTextInput placeholder="300" />
            </View>
            <CustomButton bgColor="#155D60" onPress={() => {}} height={50}>
              <BodyText className="text-white">Cadastrar Venda</BodyText>
            </CustomButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
