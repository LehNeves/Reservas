import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let localUSer = this.storage.getLocalUser();
        
        let N = API_CONFIG.baseURL.length;
        let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseURL;

        if(localUSer && requestToAPI){
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUSer.token)});
            return next.handle(authReq);
        }else{
            return next.handle(req);
        }

        
    }   
}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};