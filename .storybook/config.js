import { withInfo } from "@storybook/addon-info";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyle } from "../src/globalStyle"
import * as React from "react";

const req =  require.context('../src/stories', true, /\.stories\.js$/);

addDecorator(withInfo());
addDecorator(style => <><GlobalStyle />{style()}</>);

configure(req, module);