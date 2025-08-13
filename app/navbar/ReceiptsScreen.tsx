import { FlatList, View } from 'react-native';
import TopInputCard from '../../components/TopInputCard';
import { ReceiptsCard } from '../../components/CustomCards';
import CustomButton from '../../components/CustomButton';
import { BodyText } from '../../components/CustomText';
import { salesList } from '../../utils/Sales';

export default function ReceiptsScreen() {
  return (
    <View className="min-h-full">
      <TopInputCard />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: 8,
          paddingHorizontal: 30,
          paddingTop: 20,
        }}
      >
        <CustomButton style={{ flex: 1 }} height={40} onPress={() => {}}>
          <BodyText className="text-white">Cliente</BodyText>
        </CustomButton>
        <CustomButton
          style={{ flex: 1 }}
          height={40}
          bgColor="#166477FF"
          onPress={() => {}}
        >
          <BodyText className="text-white">Data</BodyText>
        </CustomButton>
      </View>
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
            name={sale.item.customerName}
            date={sale.item.saleDate}
            price={sale.item.price}
          />
        )}
      />
    </View>
  );
}
