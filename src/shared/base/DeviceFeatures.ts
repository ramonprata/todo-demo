import {
  Dimensions,
  PermissionsAndroid,
  Rationale,
  Permission,
  Platform,
} from 'react-native';

export class DeviceFeatures {
  static get width() {
    return Dimensions.get('screen').width;
  }

  static get height() {
    return Dimensions.get('screen').height;
  }

  static get isAndroid() {
    return Platform.OS === 'android';
  }

  static get isIOS() {
    return Platform.OS === 'ios';
  }

  static isLandscape() {
    const width = DeviceFeatures.width;
    const height = DeviceFeatures.height;
    return width >= height;
  }

  static async androidPermissionGranted(
    permission: Permission,
    rationale?: Rationale,
  ) {
    if (DeviceFeatures.isAndroid) {
      const permissionGranted = await PermissionsAndroid.check(permission);
      if (!permissionGranted) {
        const responsePermission = await PermissionsAndroid.request(
          permission,
          rationale,
        );
        return responsePermission === PermissionsAndroid.RESULTS.GRANTED;
      }
      return permissionGranted;
    }
    return false;
  }
}
