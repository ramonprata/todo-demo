import { useEffect, useState } from 'react';
import { Dimensions, EmitterSubscription } from 'react-native';
import { DeviceFeatures } from '../base/DeviceFeatures';

export type SCREEN_VARIANT = 'landscape' | 'portrait';
export const useOrientationScreen = (
  orientation?: SCREEN_VARIANT,
): {
  isLandscape: boolean;
  screenVariant: SCREEN_VARIANT;
} => {
  const [isLandscape, setIsLandscape] = useState(false);
  useEffect(() => {
    if (!orientation) {
      let subscription: EmitterSubscription;
      subscription = Dimensions.addEventListener('change', () => {
        if (DeviceFeatures.isLandscape()) {
          setIsLandscape(true);
        } else {
          setIsLandscape(false);
        }
      });

      return () => {
        subscription.remove();
      };
    }
  }, []);

  return {
    isLandscape: (orientation && orientation === 'landscape') || isLandscape,
    screenVariant: orientation ?? isLandscape ? 'landscape' : 'portrait',
  };
};
