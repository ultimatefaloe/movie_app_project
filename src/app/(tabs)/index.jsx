import { SafeAreaView } from "react-native-safe-area-context";
import { colors, icons } from "../../constant";
import {
  FlatList,
  View,
  Text,
  TextInput,
  Image,
  SectionList,
} from "react-native";
import { movies, trendingMovies } from "../../data";
import { useState } from "react";

const ListHeader = () => {
  const [search, setSearch] = useState("");

  const onSubtmitSearch = () => {
    console.log(search);
    setSearch("");
  }

  return (
    <View className="mb-4">
      <Text className="text-2xl font-bold text-neutral">
        What do you want to watch?
      </Text>
      <View className="relative my-4">
        <TextInput
          className="bg-secondary py-2 px-4 rounded-xl border border-light-secondary text-neutral text-xl"
          value={search}
          onChange={setSearch}
          placeholder="Search.."
          placeholderTextColor={colors.lightSecondary}
          returnKeyType="done"
          onSubmitEditing={onSubtmitSearch}
        />
        <Image
          source={icons.search}
          className="h-6 w-6 absolute right-4 top-3.5"
        />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trendingMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mr-4">
            <Image
              source={item.poster}
              className="h-40 w-28 rounded-xl"
            />
            <Text className="text-light-secondary mt-2">{item.title}</Text>
          </View>
        )}
        listEmptyComponent={() => (
          <View className="flex-1 items-center justify-center">
            <Text className="text-light-secondary">No trending movies</Text>  
          </View>
        )}
      />
    </View>
  );
};
export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top"]}
    >
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-200">
            <Text className="text-lg font-bold text-accent">{item.title}</Text>
            <Text className="text-light-secondary">{item.overview}</Text>
          </View>
        )}
        contentContainerClassName="p-4 bg-background gap-4"
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
}
