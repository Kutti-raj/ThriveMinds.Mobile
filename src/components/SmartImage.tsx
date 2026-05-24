import React, { useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

type Props = {
  uri?: string;
  fallback: any;
  style: StyleProp<ImageStyle>;
};

const SmartImage = ({ uri, fallback, style }: Props) => {
  const [error, setError] = useState(false);

  return (
    <Image
      source={error || !uri ? fallback : { uri }}
      onError={() => setError(true)}
      style={style}
    />
  );
};

export default React.memo(SmartImage);
