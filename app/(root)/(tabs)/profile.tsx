import { useClerk } from '@clerk/expo';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/sign-in");
    } catch (err) {
      console.error("ERROR OCCURED:", JSON.stringify(err, null, 2))
    }
  }

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}