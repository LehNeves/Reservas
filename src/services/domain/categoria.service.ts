import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../app/config/api.config";
import { CategoriaDTO } from "../../models/reservas.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService {
    constructor( public http: HttpClient){}

    findAll() : Observable<CategoriaDTO[]>{
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseURL}/categorias`);
    }
}
