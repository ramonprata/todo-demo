import React from 'react';
import { ViewProps } from 'react-native';
import OrientedComponent, {
  OrientedComponentProps,
} from '../OrientedComponent/OrientedComponent';

interface OrientedViewProps extends ViewProps {
  orientedProps: Omit<OrientedComponentProps, 'component'>;
}

const OrientedView: React.FC<OrientedViewProps> = ({
  children,
  orientedProps,
  ...viewProps
}) => {
  return (
    <OrientedComponent
      {...(orientedProps as OrientedComponentProps)}
      component="View"
      {...viewProps}>
      {children}
    </OrientedComponent>
  );
};

export default OrientedView;
