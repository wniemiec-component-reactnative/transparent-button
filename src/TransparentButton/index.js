/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * Simple button without background.
 * 
 * @param    {string} title: Button label
 * @param    {function(void): void} onPress: Function that is called when the 
 * button is pressed
 * @param    {string} [fgColor='#000000'] Foreground color (in hexadecimal)
 * @param    {boolean} [full=false] Indicates whether the width should be 100%
 */
export default function TransparentButton({ 
  title, 
  onPress, 
  fgColor='#000000', 
  full=false 
}) {
  return (
    <TouchableOpacity style={buildButtonStyle(full)} onPress={onPress}>
      <Text style={buildButtonTextStyle(fgColor)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function buildButtonStyle(full) {
  return [
    styles.btn, 
    full ? { width: '100%' } : null
  ];
}

function buildButtonTextStyle(fgColor) {
  return [
    styles.title, 
    { color: fgColor }
  ];
}
