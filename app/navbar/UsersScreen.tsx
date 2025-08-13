import { FlatList, View } from 'react-native';
import TopInputCard from '../../components/TopInputCard';
import { CustomersCard, UsersCard } from '../../components/CustomCards';
import { User, usersList } from '../../utils/Users';
import { useState } from 'react';
import UserModal from '../../components/UserModal';

export default function UsersScreen() {
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  return (
    <>
      <UserModal
        visible={registerModalVisible}
        setVisible={setRegisterModalVisible}
        user={user}
        isInUsersScreen
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
          data={usersList}
          contentContainerStyle={{ padding: 32 }}
          ItemSeparatorComponent={_ => {
            return <View style={{ paddingVertical: 10 }} />;
          }}
          keyExtractor={item => item.id.toString()}
          renderItem={user => (
            <CustomersCard
              hasRole
              name={user.item.name}
              role={user.item.role}
              cpf={user.item.cpf}
              phone={user.item.phone}
              email={user.item.email}
              onPressEdit={() => {
                setUser(user.item);
                setRegisterModalVisible(true);
              }}
            />
          )}
        />
      </View>
    </>
  );
}
