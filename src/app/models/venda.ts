import { Data } from "@angular/router";

export interface Venda {
    id?: number
    rebanho_origem: number
    rebanho_destino: number
    id_finalidade_venda: number
    qtde_vendida: number
    data: Data
}