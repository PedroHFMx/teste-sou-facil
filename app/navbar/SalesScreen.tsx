import { View, FlatList } from 'react-native';
import { SalesCustomersCard } from '../../components/CustomCards';
import { usersList } from '../../utils/Users';
import TopInputCard from '../../components/TopInputCard';

export default function SalesScreen() {
  return (
    <View className="min-h-full">
      <TopInputCard hasIcon iconName="list" iconColor="#155D60" />
      <FlatList
        className="flex-1"
        data={usersList}
        contentContainerStyle={{ padding: 32 }}
        ItemSeparatorComponent={_ => {
          return <View style={{ paddingVertical: 10 }} />;
        }}
        keyExtractor={item => item.id.toString()}
        renderItem={user => (
          <SalesCustomersCard
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
