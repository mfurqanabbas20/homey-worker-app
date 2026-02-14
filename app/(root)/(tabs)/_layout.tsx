import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from "expo-router";
import { Briefcase, MessageCircleWarning, Wallet } from 'lucide-react-native';


const Layout = () => {
  return (
    <Tabs initialRouteName="home" screenOptions={{
      tabBarActiveTintColor: "#C59315",
      tabBarInactiveTintColor: "#6B7280",
      headerShown: false,
      tabBarStyle: {
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        borderColor: "white",
      }
    }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home-fill"
              size={22}
              color={focused ? "#C59315" : "#6B7280"} />
          )
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "Jobs",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Briefcase
              size={22}
              color={focused ? "#C59315" : "#6B7280"} />
          )
        }}
      />
      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Wallet
              color={focused ? "#C59315" : "#6B7280"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#C59315" : "#6B7280"}
            />)
        }}
      />
    </Tabs>
  )
}

export default Layout;
