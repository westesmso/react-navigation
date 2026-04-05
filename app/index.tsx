import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import React from "react";
import TAB from "./src/components/TAB";

export default function TesteTab() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <TAB/>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
