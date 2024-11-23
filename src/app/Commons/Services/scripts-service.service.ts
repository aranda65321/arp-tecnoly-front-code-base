import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptsServiceService {

  constructor() { }


  public loadScriptHeaderAnimation(idParent: string, url:string) {
    return new Promise((resolve, reject) => {
      if (idParent && document.getElementById(idParent)) {
        resolve({ id: idParent, loaded: true, status: 'Already Loaded' });
      }
      let body = document.body;
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = '';
      script.src = url;
      script.id = idParent;
      script.onload = () => {
        resolve({ id: idParent, loaded: true, status: 'Loaded' });
      };
      script.onerror = (error: any) => resolve({ id: idParent, loaded: false, status: 'Loaded' });
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  public removeScript(id: string) {
    let script = document.getElementById(id);
    if (script) {
      script.remove();
    }
  }
}
