<div align="center">
    <a href="https://github.com/mbb10324/react-visualize/">
        <h1>React Visualize</h1>
    </a>
</div>
<br />
<div align="center">
<img src="https://img.shields.io/badge/npm-v0.0.1-violet?style=for-the-badge" alt="badge"/>
<img src="https://img.shields.io/badge/gzip_size-9.4kB-orange?style=for-the-badge" alt="badge"/>
<img src="https://img.shields.io/badge/license-Apache_2.0-blue?style=for-the-badge" alt="badge"/>
<img src="https://img.shields.io/badge/coverage-100%25-green?style=for-the-badge" alt="badge"/>
</div>
<br />

react-visualize is a library designed to manage the render state of multiple UI elements, such as modals, drawers, or toast notifications. It provides an easy way to register, show, hide, and manage visual elements in your React applications with various customizable options, like animations, backdrops, and positioning.

## Features

- Multi-element Rendering: Register and manage multiple visual elements simultaneously.
- Customizable Options: Easily set animations, backdrop color, positioning, and more.
- Singleton Pattern: Expose the register, show, and hide functions globally for easy use.
- Global State Management: Handle the state of visual elements through a centralized reducer.

## Installation

`npm install react-visualize`

## Usage

Step 1: Wrap Your App with VisualizeProvider

To use react-visualize, wrap your application with the VisualizeProvider component. This ensures the context is available globally.

```
import React from "react";
import ReactDOM from "react-dom";
import { VisualizeProvider } from "react-visualize";
import App from "./App";

ReactDOM.render(
  <VisualizeProvider>
    <App />
  </VisualizeProvider>,
  document.getElementById("root")
);

```

Step 2: Register Elements

You can register visual elements using the registerElement or registerElements function. Each element must have a unique id.

```
import { registerElement, showElement } from "react-visualize";

function ExampleComponent() {
  const handleRegister = () => {
    registerElement("exampleModal", <MyModalComponent />, {
      showBackdrop: true,
      backdropColor: "rgba(0, 0, 0, 0.5)",
      animation: {
        shown: { opacity: 1 },
        hidden: { opacity: 0 },
        always: { transition: "all 0.5s ease-in-out" },
      },
    });
  };

  const handleShow = () => {
    showElement("exampleModal");
  };

  return (
    <div>
      <button onClick={handleRegister}>Register Modal</button>
      <button onClick={handleShow}>Show Modal</button>
    </div>
  );
}
```

Step 3: Show or Hide Elements

Use showElement or hideElement functions to control the visibility of a registered element.

```
import { showElement, hideElement } from "react-visualize";

function ExampleComponent() {
  const handleShow = () => {
    showElement("exampleModal");
  };

  const handleHide = () => {
    hideElement("exampleModal");
  };

  return (
    <div>
      <button onClick={handleShow}>Show Modal</button>
      <button onClick={handleHide}>Hide Modal</button>
    </div>
  );
}
```

Example Element Component

Your visual elements, such as modals or popovers, are rendered automatically by the Container component in the library, which is part of the VisualizeProvider. Each element is styled and positioned based on the options provided during registration.

## API

`registerElement(id: string, body: ReactNode, options?: ElementOptions)`
Registers a new element.

- id: A unique identifier for the element.
- body: The content to be rendered.
- options: Optional configuration options for the element.

`registerElements(elements: { id: string; body: ReactNode; options?: ElementOptions }[])`
Registers multiple elements at once.

`showElement(id: string)`
Shows a registered element by its unique id.

`hideElement(id: string)`
Hides a registered element by its unique id.

`useVisualize()`
A custom hook to access the state of the visual elements. Must be used within the VisualizeProvider.

### Options

When registering an element, you can pass the following ElementOptions:
| Option | Type | Description | Default Value |
| ------ | ---- | ----------- | ------------- |
| position | Position | Sets the position of the element on the screen. | { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } |
| showBackdrop | boolean | Whether to show a backdrop behind the element. | true |
| backdropColor | string | Sets the color of the backdrop. | "rgba(0, 0, 0, 0.5)" |
| clickBackdropToClose | boolean | Whether clicking on the backdrop hides the element. | true |
| animation | Animation | CSS properties to animate showing and hiding. | {} |
| backdropAnimation | Animation | CSS properties for the backdrop animation. | {} |
| timeout | number | Duration in milliseconds to auto-hide the element. | undefined |

## License

This project is licensed under the Apache 2.0 License. See the LICENSE file for details.

## Github

[https://github.com/mbb10324/react-visualize](https://github.com/mbb10324/react-visualize "react-visualize")
