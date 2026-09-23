import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-screens";

const HomeScrren = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View className="bg-white flex-row items-center justify-between px-4 py-2">
                <View className="">
                    <Text className="text-lg font-bold">TripGo</Text>
                </View>
                <View className="flex-row items-center justify-between px-4 py-2"></View>
            </View>
            <View className="w-full h-1/2 bg-gray-200 flex items-center justify-center">
                <SearchBar />
            </View>
        </SafeAreaView>
    );
};
export default HomeScrren;
