import { Stack } from "expo-router";

export const _layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="nearby" />
            <Stack.Screen name="saved" />
            <Stack.Screen name="trip" />
        </Stack>
    );
};
