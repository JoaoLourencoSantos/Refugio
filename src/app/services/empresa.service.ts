import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import EmpresaDTO from '../models/dto/empresa';
import PesquisaEmpresaDTO from '../models/dto/pesquisa.empresa.dto';
import RespostaDTO from '../models/dto/resposta.dto';
import { Empresa } from './../models/entities/empresa.model';

@Injectable({
	providedIn: 'root',
})
export class EmpresaService {
	private API_BASEPATH = environment.API_BASEPATH;

	constructor(private http: HttpClient) {}

	create(body: EmpresaDTO): Observable<RespostaDTO> {
		return this.http.post<RespostaDTO>(
			`${this.API_BASEPATH}/usuarios/empresa`,
			body,
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	createCompany(body: Empresa): Observable<RespostaDTO> {
		return this.http.post<RespostaDTO>(
			`${this.API_BASEPATH}/usuarios/empresa`,
			body,
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	update(body: EmpresaDTO, idUsuario): Observable<any> {
		return this.http.patch<any>(
			`${this.API_BASEPATH}/empresas/${idUsuario}`,
			body,
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	updateUser(body: any, idUsuario): Observable<any> {
		return this.http.patch<any>(
			`${this.API_BASEPATH}/usuarios/${idUsuario}`,
			body,
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}

	find(pesquisa?: PesquisaEmpresaDTO): Observable<RespostaDTO> {
		const criteria = !pesquisa ? '' : pesquisa.buildUrl();

		return this.http.get<RespostaDTO>(
			`${this.API_BASEPATH}/empresas?${criteria}`,
			{
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}

	findById(idUsuario: number) {
		return this.http.get<RespostaDTO>(
			`${this.API_BASEPATH}/empresas/${idUsuario}`,
			{ headers: { 'Content-Type': 'application/json' } }
		);
	}
}
