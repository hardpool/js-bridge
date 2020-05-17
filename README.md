# @hardpool/js-bridge
![Example GIF](https://img.shields.io/badge/support-angular%209.x-brightgreen.svg)  ![Example GIF](https://img.shields.io/badge/support-angular%205.x+-brightgreen.svg)

Bridge between pure vanilla javascript and angular. Expose selected methods of angular component on javascript window object and call them from external javascript application. Making angular app plugable/co-exist with other front end app. 

## Demo
[Click here to see it in action!](https://hardikdabhi.github.io/js-bridge/)

## Installation
`npm i @hardpool/js-bridge`

## Usage
Import `JsBridgeModule` in your module.
``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JsBridgeModule } from '@hardpool/js-bridge';

@NgModule({
  // ...
  imports: [
	// ...
	JsBridgeModule.forRoot()
  ],
  // ...
})
export class AppModule { }
```

Import service in component and expose component methods as required [using js bridge methods](#API).

component.ts
``` typescript
import { JsBridgeService } from '@hardpool/js-bridge';

@Component({
  // ...
})
export class DemoComponent implements OnInit {
	constructor(..., jsBridge: JsBridgeService, ...) {
		jsBridge.exposeMethod(this, "someNamespace", "someMethod");
	}

	someMethod(...params) {
		...
	}
}
```

In javascript call method like,
``` javascript
someNamespace.someMethod(...args);
```

## API

Below are the methods exposed by `JsBridge`.

| Method | Details |
| :--- | :--- |
| `exposeMethod(classRef: any, namespace: string, fnName: string[] | string)` | Expose angular component method on javascript window object. `classRef`: Reference of current class, generally `this` `namespace`: Name of namespace on which method is exposed, could be any string, if null method will be exposed on `window` `fnName`: Name of function to be exposed, nust match component method name |
| `executeMethod(namespace: string, methodName: string, ...args: any[])` | Executes javascript method outsize angular |