import { useEffect } from 'react';
import { DeviceFeatures } from '../base/DeviceFeatures';

export const useVoiceRecognition = () => {
  useEffect(() => {
    DeviceFeatures.androidPermissionGranted('android.permission.RECORD_AUDIO');
  }, []);
};
