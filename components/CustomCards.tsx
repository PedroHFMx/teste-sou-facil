import {
  GestureResponderEvent,
  StyleProp,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import { BodyText } from './CustomText';
import Feather from 'react-native-vector-icons/Feather';
import { ReactNode, useState } from 'react';
import CustomButton from './CustomButton';
import { role } from '../utils/Users';

type iconTextType = {
  iconName: string;
  title: string;
  fontFamily?: string | undefined;
};

type mainCardType = {
  name?: string;
  cpf?: string;
  phone?: string;
  email?: string;
  children?: ReactNode;
  hasRole?: boolean;
  role?: role;
  onPressEdit?:
    | (((event: GestureResponderEvent) => void) &
        ((event: GestureResponderEvent) => void))
    | undefined;
};

function IconText(props: iconTextType) {
  return (
    <View style={rowStyle}>
      <Feather name={props.iconName} size={20} />
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={{
          fontFamily: props.fontFamily ?? 'Poppins-Regular',
          paddingRight: 30,
          includeFontPadding: false,
          fontSize: 16,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

export function MainCard(props: mainCardType) {
  return (
    <View style={customersCardStyle}>
      <IconText
        fontFamily="Poppins-Medium"
        iconName="user"
        title={props.name ?? 'Name'}
      />
      <IconText
        fontFamily="Poppins-Light"
        iconName="file-text"
        title={props.cpf ?? 'CPF/CNPJ'}
      />
      <IconText
        fontFamily="Poppins-Medium"
        iconName="phone"
        title={props.phone ?? 'Phone'}
      />
      <IconText
        fontFamily="Poppins-Light"
        iconName="mail"
        title={props.email ?? 'Email'}
      />
      {props.hasRole && (
        <IconText
          fontFamily="Poppins-Light"
          iconName="server"
          title={props.role !== undefined ? role[props.role] : 'Role'}
        />
      )}
      <View style={{ borderWidth: 0.2 }} />
      {props.children}
    </View>
  );
}

export function CustomersCard(props: mainCardType) {
  return (
    <MainCard {...props}>
      <View style={{ gap: 8, display: 'flex', flexDirection: 'row' }}>
        <View className="flex-1">
          <CustomButton height={45} bgColor="#7f1d1d" onPress={() => {}}>
            <BodyText className="text-white">Excluir</BodyText>
          </CustomButton>
        </View>
        <View className="flex-1">
          <CustomButton
            height={45}
            bgColor="#1e3a8a"
            onPress={props.onPressEdit}
          >
            <BodyText className="text-white">Editar</BodyText>
          </CustomButton>
        </View>
      </View>
    </MainCard>
  );
}

export function SalesCustomersCard(props: mainCardType) {
  return (
    <MainCard {...props}>
      <CustomButton height={45} bgColor="#155D60" onPress={props.onPressEdit}>
        <BodyText className="text-white">Cadastrar Venda</BodyText>
      </CustomButton>
    </MainCard>
  );
}

export function ReceiptsCard(props: {
  received?: boolean;
  name?: string;
  price?: string;
  date?: string;
  isSale?: boolean;
}) {
  const [received, setReceived] = useState(Math.random() < 0.5);
  return (
    <View style={customersCardStyle}>
      <IconText
        iconName="user"
        title={props.name ?? 'Name'}
        fontFamily="Poppins-Medium"
      />
      <IconText
        iconName="dollar-sign"
        title={props.price ?? 'Price'}
        fontFamily="Poppins-Light"
      />
      <IconText
        iconName="calendar"
        title={props.date ?? 'Date'}
        fontFamily="Poppins-Medium"
      />
      {!props.isSale && (
        <IconText
          iconName={received ? 'check-circle' : 'circle'}
          title={received ? 'Recebido' : 'Pendente'}
          fontFamily="Poppins-Medium"
        />
      )}
      {!received && !props.isSale && (
        <>
          <View style={{ borderWidth: 0.2 }} />
          <CustomButton
            disabled={received}
            bgColor={'#D4A106FF'}
            height={45}
            onPress={() => {
              setReceived(true);
            }}
          >
            <BodyText className="text-white">Marcar como recebida</BodyText>
          </CustomButton>
        </>
      )}
    </View>
  );
}

export function UsersCard(props: mainCardType) {
  return <MainCard {...props} hasRole></MainCard>;
}

const customersCardStyle: StyleProp<ViewStyle> = {
  gap: 10,
  display: 'flex',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 20,
  elevation: 5,
};

const rowStyle: StyleProp<ViewStyle> = {
  alignItems: 'center',
  gap: 15,
  display: 'flex',
  flexDirection: 'row',
};
