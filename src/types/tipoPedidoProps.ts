import React from 'react';
import { ColorValue } from 'react-native';

export interface TipoPedidoProps {
  iconName?: string;
  SvgIcon?: React.FC;
  title: string;
  colorName?: ColorValue;
}
