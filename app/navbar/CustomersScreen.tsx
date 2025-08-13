import { FlatList, View } from 'react-native';
import { CustomersCard } from '../../components/CustomCards';
import { usersList } from '../../utils/Users';
import TopInputCard from '../../components/TopInputCard';

export default function CustomersScreen() {
  return (
    <View className="min-h-full">
      <TopInputCard hasIcon iconName="user-plus" />
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
            name={user.item.name}
            cpf={user.item.cpf}
            phone={user.item.phone}
            email={user.item.email}
          />
        )}
      />
    </View>
  );
}
