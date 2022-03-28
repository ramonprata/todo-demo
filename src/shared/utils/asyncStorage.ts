import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeObjectData<T>(key: string, value: T) {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
}

export async function getObjectData<T>(key: string) {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
}

export async function clearAll<T>(key: string) {
  await AsyncStorage.clear();
}
