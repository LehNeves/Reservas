import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage : StorageService){}

    jwtHelper : JwtHelper = new JwtHelper();

    autenticate(creds : CredenciaisDTO) {
        return this.http.post(`${API_CONFIG.baseURL}/login`, creds,
          {
            observe: 'response',
            responseType: 'text'
        });
    }

    refreshToken() {
        return this.http.post(`${API_CONFIG.baseURL}/auth/refresh_token`,
        {},
        {
            observe: 'response',
            responseType: 'text'
        });
    }

  successfulLogin(authorizationValue: string, perfil: string): String {
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub
        };
        
        this.storage.setLocalUser(user);
      return perfil;

    }

    logout(){
        this.storage.setLocalUser(null);
    }
}
