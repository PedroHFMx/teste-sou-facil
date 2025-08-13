import { View, FlatList } from 'react-native';
import { ReceiptsCard, SalesCustomersCard } from '../../components/CustomCards';
import { role, User, usersList } from '../../utils/Users';
import TopInputCard from '../../components/TopInputCard';
import { useState } from 'react';
import { salesList } from '../../utils/Sales';
import SaleModal from '../../components/SaleModal';

export default function SalesScreen() {
  const [lookSales, setLookSales] = useState(false);
  const [saleModalVisible, setSaleModalVisible] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <>
      <SaleModal
        setVisible={setSaleModalVisible}
        visible={saleModalVisible}
        user={user}
      />
      <View className="min-h-full">
        <TopInputCard
          onPresseIcon={() => {
            setLookSales(!lookSales);
          }}
          hasIcon
          iconName={!lookSales ? 'list' : 'user'}
          iconColor="#155D60"
        />
        {!lookSales ? (
          <FlatList
            className="flex-1"
            data={usersList.filter(user => user.role === role.user)}
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
                onPressEdit={() => {
                  setUser(user.item);
                  setSaleModalVisible(true);
                }}
              />
            )}
          />
        ) : (
          <FlatList
            className="flex-1"
            data={salesList}
            contentContainerStyle={{ padding: 32 }}
            ItemSeparatorComponent={_ => {
              return <View style={{ paddingVertical: 10 }} />;
            }}
            keyExtractor={item => item.id.toString()}
            renderItem={sale => (
              <ReceiptsCard
                isSale
                date={sale.item.saleDate}
                name={sale.item.customerName}
                price={sale.item.price}
              />
            )}
          />
        )}
      </View>
    </>
  );
}
