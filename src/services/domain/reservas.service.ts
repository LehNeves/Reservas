import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { ReservasDTO } from "../../models/reservas.dto";

@Injectable()
export class ReservasService {
    constructor( public http: HttpClient){}

    findReserva(cliente_id : string) : Observable<ReservasDTO[]>{
        return this.http.get<ReservasDTO[]>(`${API_CONFIG.baseURL}/clientes/${cliente_id}/reservas`);
    }
}
