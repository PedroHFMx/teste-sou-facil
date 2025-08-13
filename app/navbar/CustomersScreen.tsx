import { FlatList, View } from 'react-native';
import { CustomersCard } from '../../components/CustomCards';
import { role, User, usersList } from '../../utils/Users';
import TopInputCard from '../../components/TopInputCard';
import { useState } from 'react';
import UserModal from '../../components/UserModal';

export default function CustomersScreen() {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <>
      <UserModal
        setVisible={setRegisterModalVisible}
        visible={registerModalVisible}
        user={user}
      />
      <View className="min-h-full">
        <TopInputCard
          hasIcon
          iconName="user-plus"
          onPresseIcon={() => {
            setUser(undefined);
            setRegisterModalVisible(true);
          }}
        />
        <FlatList
          className="flex-1"
          data={usersList.filter(user => user.role === role.user)}
          contentContainerStyle={{ padding: 32 }}
          ItemSeparatorComponent={_ => {
            return <View style={{ paddingVertical: 10 }} />;
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={user => {
            return (
              <CustomersCard
                name={user.item.name}
                cpf={user.item.cpf}
                phone={user.item.phone}
                email={user.item.email}
                onPressEdit={() => {
                  setUser(user.item);
                  setRegisterModalVisible(true);
                }}
              />
            );
          }}
        />
      </View>
    </>
  );
}
