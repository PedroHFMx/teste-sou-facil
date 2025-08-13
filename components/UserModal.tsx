import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import CustomButton from './CustomButton';
import { TitleText3, BodyText } from './CustomText';
import CustomTextInput from './CustomTextInput';
import Feather from 'react-native-vector-icons/Feather';
import { role, User } from '../utils/Users';

export default function UserModal(props: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  user?: User;
  isInUsersScreen?: boolean;
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
              <TitleText3>
                {!props.user
                  ? props.isInUsersScreen
                    ? 'Cadastrar Usuário'
                    : 'Cadastrar Cliente'
                  : props.isInUsersScreen
                  ? 'Editar Usuário'
                  : 'Editar Cliente'}
              </TitleText3>
              <Feather name="x" size={22} />
            </View>
            <View className="gap-2">
              <BodyText>Nome</BodyText>
              <CustomTextInput placeholder="João" value={props.user?.name} />
            </View>
            <View className="gap-2">
              <BodyText>CPF/CNPJ</BodyText>
              <CustomTextInput
                placeholder="xxx.xxx.xxx-xx"
                value={props.user?.cpf}
              />
            </View>
            <View className="gap-2">
              <BodyText>Fone</BodyText>
              <CustomTextInput
                placeholder="(xx) xxxxx-xxxx"
                value={props.user?.phone}
              />
            </View>
            <View className="gap-2">
              <BodyText>Email</BodyText>
              <CustomTextInput
                placeholder="joao@mail.com"
                value={props.user?.email}
              />
            </View>
            {props.isInUsersScreen && (
              <View className="gap-2">
                <BodyText>Cargo</BodyText>
                <CustomTextInput
                  placeholder="adm"
                  value={
                    props.user?.role !== undefined ? role[props.user?.role] : ''
                  }
                />
              </View>
            )}
            <CustomButton onPress={() => {}} height={50}>
              <BodyText className="text-white">
                {!props.user ? 'Cadastrar' : 'Editar'}
              </BodyText>
            </CustomButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
