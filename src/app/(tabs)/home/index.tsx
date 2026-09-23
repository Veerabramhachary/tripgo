import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScrren = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View className="bg-white flex-row items-center justify-between px-4 py-2">
                <View className="">
                    <Text className="text-lg font-bold">TripGo</Text>
                </View>
                <View className="flex-row items-center justify-between px-4 py-2"></View>
            </View>
            <View className="w-full h-1/2 bg-gray-200 flex items-center justify-center px-4">
                <TextInput
                    value=""
                    placeholder="Search destinations"
                    placeholderTextColor="#6b7280"
                    className="w-full rounded-full bg-white px-4 py-3 text-base text-gray-800"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
        </SafeAreaView>
    );
};
export default HomeScrren;
