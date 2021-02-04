import React from "react";
import { NativeRouter as Router, Route, Link as NativeLink } from 'react-router-native';
import { TouchableOpacity } from "react-native";

function Link (props: any) {
  return <NativeLink component={TouchableOpacity} activeOpacity={0.8} {...props}  />
}

export {
  Router,
  Route,
  Link
}
