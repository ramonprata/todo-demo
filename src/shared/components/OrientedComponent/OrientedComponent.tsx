import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOrientationScreen, SCREEN_VARIANT } from '../../hooks';

const reactNativeComponents = {
  View,
  Text,
};

export interface OrientedComponentProps {
  component: keyof typeof reactNativeComponents;
  defaultStyle: object;
  portraitStyle?: object;
  landscapeStyle?: object;
  orientation?: SCREEN_VARIANT;
  [key: string]: any;
}

const OrientedComponent: React.FC<OrientedComponentProps> = ({
  component,
  children,
  defaultStyle,
  portraitStyle,
  landscapeStyle,
  orientation,
  ...otherProps
}) => {
  const { screenVariant } = useOrientationScreen(orientation);
  const style = getStyles(
    defaultStyle,
    screenVariant,
    portraitStyle,
    landscapeStyle,
  );

  return React.createElement(reactNativeComponents[component], {
    children,
    style,
    ...otherProps,
  });
};

const getStyles = (
  defaultStyle: object,
  screenVariant: SCREEN_VARIANT,
  portraitStyle = {},
  landscapeStyle = {},
) => {
  if (screenVariant === 'portrait') {
    return StyleSheet.create({
      ...defaultStyle,
      ...portraitStyle,
    });
  }
  return StyleSheet.create({
    ...defaultStyle,
    ...landscapeStyle,
  });
};

export default OrientedComponent;
