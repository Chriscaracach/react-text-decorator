# React Decorated Text Library

The React Text Decorator Library is a simple library that allows you to render text with small decorators like lines, dots, and more. It's designed to enhance the presentation of information for your users.

## Installation

You can install the library via npm or yarn:

npm install @christian-caracach/react-text-decorator

or

yarn add @christian-caracach/react-text-decorator

## Usage

The library provides two main components, `StripeText` and `DotText` (more will come), to add decorations to your text. Here's how you can use them:

### StripeText

```jsx
import React from "react";
import { StripeText } from "react-decorated-text";

function MyComponent() {
	return <StripeText text="This is a decorated text with stripes." color="primary" />;
}
```

### DotText

```jsx
import React from "react";
import { DotText } from "react-decorated-text";

function MyComponent() {
	return <DotText text="This is a decorated text with dots." dotColor="error" />;
}
```

## Props

// TODO update Props
Both StripeText and DotText components accept the following props:

#### text (string, required): The text to be decorated.

#### color (string, optional): The color of the stripes (only for StripeText).

#### customClassName (string, optional): Custom className to add styles

You can find more examples and customization options in the examples directory of this repository.

## License

This library is open-source and available under the MIT License.

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this library.

## Author

This library is maintained by Christian Caracach. It is my first react library project. Be kind, we're all learning.

## Support

If you encounter any issues or have questions, please open an issue.

Enjoy using React Text Decorator Library!
