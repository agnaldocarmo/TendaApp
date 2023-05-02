import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TipoMovimentacao {
  DIZIMO = "DIZIMO",
  DIZIMO_ELETRONICO = "DIZIMO_ELETRONICO",
  OFERTA = "OFERTA",
  OFERTA_ELETRONICA = "OFERTA_ELETRONICA",
  DESPESA = "DESPESA"
}



type EagerMovimentacoes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movimentacoes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly TipoMovimentacao?: TipoMovimentacao | keyof typeof TipoMovimentacao | null;
  readonly Valor?: number | null;
  readonly Pessoas?: (MovimentacoesPessoas | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMovimentacoes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Movimentacoes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly data?: string | null;
  readonly TipoMovimentacao?: TipoMovimentacao | keyof typeof TipoMovimentacao | null;
  readonly Valor?: number | null;
  readonly Pessoas: AsyncCollection<MovimentacoesPessoas>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Movimentacoes = LazyLoading extends LazyLoadingDisabled ? EagerMovimentacoes : LazyMovimentacoes

export declare const Movimentacoes: (new (init: ModelInit<Movimentacoes>) => Movimentacoes) & {
  copyOf(source: Movimentacoes, mutator: (draft: MutableModel<Movimentacoes>) => MutableModel<Movimentacoes> | void): Movimentacoes;
}

type EagerPessoas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pessoas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly data_nasc?: string | null;
  readonly cpf?: string | null;
  readonly telefone?: string | null;
  readonly email?: string | null;
  readonly movimentacoess?: (MovimentacoesPessoas | null)[] | null;
  readonly urlFoto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPessoas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pessoas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nome?: string | null;
  readonly data_nasc?: string | null;
  readonly cpf?: string | null;
  readonly telefone?: string | null;
  readonly email?: string | null;
  readonly movimentacoess: AsyncCollection<MovimentacoesPessoas>;
  readonly urlFoto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pessoas = LazyLoading extends LazyLoadingDisabled ? EagerPessoas : LazyPessoas

export declare const Pessoas: (new (init: ModelInit<Pessoas>) => Pessoas) & {
  copyOf(source: Pessoas, mutator: (draft: MutableModel<Pessoas>) => MutableModel<Pessoas> | void): Pessoas;
}

type EagerMovimentacoesPessoas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MovimentacoesPessoas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly movimentacoesId?: string | null;
  readonly pessoasId?: string | null;
  readonly movimentacoes: Movimentacoes;
  readonly pessoas: Pessoas;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMovimentacoesPessoas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MovimentacoesPessoas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly movimentacoesId?: string | null;
  readonly pessoasId?: string | null;
  readonly movimentacoes: AsyncItem<Movimentacoes>;
  readonly pessoas: AsyncItem<Pessoas>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MovimentacoesPessoas = LazyLoading extends LazyLoadingDisabled ? EagerMovimentacoesPessoas : LazyMovimentacoesPessoas

export declare const MovimentacoesPessoas: (new (init: ModelInit<MovimentacoesPessoas>) => MovimentacoesPessoas) & {
  copyOf(source: MovimentacoesPessoas, mutator: (draft: MutableModel<MovimentacoesPessoas>) => MutableModel<MovimentacoesPessoas> | void): MovimentacoesPessoas;
}