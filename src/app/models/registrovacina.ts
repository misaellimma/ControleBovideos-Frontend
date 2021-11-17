import { Data } from "@angular/router";

export interface RegistroVacina {
    id?: number
    id_rebanho: number
    id_vacina: number
    data: Data
    qtde_vacinado: number
}