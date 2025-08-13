import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { BodyText } from './CustomText';
import Feather from 'react-native-vector-icons/Feather';
import { ReactNode } from 'react';
import CustomButton from './CustomButton';

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
      <View style={{ borderWidth: 0.2 }} />
      {props.children}
    </View>
  );
}

export function CustomersCard(props: mainCardType) {
  return (
    <MainCard {...props}>
      <View style={{ gap: 8 }} className="flex flex-row">
        <View className="flex-1">
          <CustomButton height={45} bgColor="#7f1d1d" onPress={() => {}}>
            <BodyText className="text-white">Excluir</BodyText>
          </CustomButton>
        </View>
        <View className="flex-1">
          <CustomButton height={45} bgColor="#1e3a8a" onPress={() => {}}>
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
      <CustomButton height={45} bgColor="#155D60" onPress={() => {}}>
        <BodyText className="text-white">Cadastrar Venda</BodyText>
      </CustomButton>
    </MainCard>
  );
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
