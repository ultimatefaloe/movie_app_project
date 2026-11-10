import { View, Text, Image } from "react-native";

export const TabBarIcon = ({ title, isActive, icon }) => {
  return (
    <View className="items-center justify-center mt-8 gap-1.5 w-32 h-16">
      <Image source={icon} className="w-6 h-6" width={24} height={24} />
      <Text
        className={`text-xs font-bold ${isActive ? "text-accent" : "text-light-secondary"}`}
      >
        {title}
      </Text>
    </View>
  );
};