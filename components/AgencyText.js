import {Text, StyleSheet } from 'react-native';
import React from 'react';

export default function AgencyText(props) {
  return (
      <Text
        style={[styles(props.weight).text,props.styles]}
      >
        {props.children}
      </Text>
  );
}

const styles = (weight)=> StyleSheet.create({
    text:{
        fontFamily:weight=="bold"?"agencyFBBold":"agencyFB",
        color:"black"
    }
})
