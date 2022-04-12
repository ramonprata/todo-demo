import { Dimensions } from 'react-native';

export class DeviceFeatures {
  static get width() {
    return Dimensions.get('screen').width;
  }
  static get height() {
    return Dimensions.get('screen').height;
  }

  static isLandscape() {
    const width = DeviceFeatures.width;
    const height = DeviceFeatures.height;
    return width >= height;
  }
}
