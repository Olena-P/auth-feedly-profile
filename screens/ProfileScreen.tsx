import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { RootState } from "../store";
import { useRouter } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";
import StyledButton from "@/components/StyledButton";
import { BigText, RegularText } from "@/components/StyledText";
import AuthGuard from "@/components/AuthGuard";

const ProfileScreen = () => {
  const { toggleTheme, theme } = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = async () => {
    dispatch(logout());
    await router.replace("/auth");
  };

  return (
    <AuthGuard>
      <View
        style={[styles.container, { backgroundColor: theme.backgroundColor }]}
      >
        <Image
          source={{ uri: "https://reqres.in/img/faces/2-image.jpg" }}
          style={styles.avatar}
        />
        {user?.name && <BigText>Welcome, {user?.name}</BigText>}
        <RegularText>{user?.email}</RegularText>
        <StyledButton title="Toggle theme" onPress={toggleTheme} />
        <StyledButton
          title="Logout"
          onPress={handleLogout}
          variant="outlined"
        />
      </View>
    </AuthGuard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ProfileScreen;
