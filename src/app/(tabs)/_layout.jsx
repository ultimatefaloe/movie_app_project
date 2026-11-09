import { Tabs } from "expo-router";
import { colors, tabIcons } from "../../constant";
import { StyleSheet, View, Text, Image } from "react-native";

const TabBarIcon = ({ title, isActive, icon }) => {
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

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.lightSecondary,
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false, // Hide the default label
        headerShown: false, // Hide the header for all screens
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Home"
              icon={focused ? tabIcons.activeHome : tabIcons.home}
              isActive={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Search"
              icon={focused ? tabIcons.activeSearch : tabIcons.search}
              isActive={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: "Watchlist",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Watchlist"
              icon={focused ? tabIcons.activeWatchlist : tabIcons.watchlist}
              isActive={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 999,
    marginHorizontal: 10,
    height: 70,
    paddingVertical: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
