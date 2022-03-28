import { Dimensions } from 'react-native';

export class DeviceFeatures {
  static get width() {
    return Dimensions.get('screen').width;
  }
}
