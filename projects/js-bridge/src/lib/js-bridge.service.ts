import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsBridgeService {

  // private zone: NgZone;

	constructor(private zone: NgZone) {
		// this.zone = zone;
	}

	public exposeMethod(classRef: any, namespace: string, fnName: string[] | string): void {
		if(!window[namespace])
			window[namespace] = {};
		let _fnName: string[];
		if(fnName instanceof Array)
			_fnName = fnName;
		else
			_fnName = [fnName];
		_fnName.forEach(fnName => {
			window[namespace][fnName] = (...args: any[]) => this.zone.run(() => classRef[fnName](...args));
		});
	}

	public executeMethod(namespace: string, methodName: string, ...args: any[]){
		return (<any>window)[namespace][methodName](...args);
	}

}
