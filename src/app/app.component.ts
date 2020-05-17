import { Component } from '@angular/core';
import { JsBridgeService } from '@hardpool/js-bridge';

@Component({
  selector: 'hd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	testVar: string = "Click HTML or Angular button.";
	
	constructor(jsBridge: JsBridgeService) {
		jsBridge.exposeMethod(this, "jsBridge", "setText");
	}

	setText(text) {
		this.testVar = text;
	}

}
