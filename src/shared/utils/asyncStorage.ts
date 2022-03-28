import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeObjectData<T>(key: string, value: T) {
  const jsonValue = JSON.stringify(value);
  return AsyncStorage.setItem(key, jsonValue);
}

export async function getObjectData<T>(key: string) {
  const jsonValue = await AsyncStorage.getItem('@storage_Key');
  return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
}
