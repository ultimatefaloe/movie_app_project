import { Text, View, Image } from "react-native";
import { images } from "../../constant";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-tint">
        Welcome to Nativewind!
      </Text>

      <View className="w-40 h-40 mt-4">
        <Image source={images.dog} className="w-full h-full" width={100} height={100} />
      </View>
    </View>
  );
}
