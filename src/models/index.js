// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TipoMovimentacao = {
  "DIZIMO": "DIZIMO",
  "DIZIMO_ELETRONICO": "DIZIMO_ELETRONICO",
  "OFERTA": "OFERTA",
  "OFERTA_ELETRONICA": "OFERTA_ELETRONICA",
  "DESPESA": "DESPESA"
};

const { Movimentacoes, Pessoas, MovimentacoesPessoas } = initSchema(schema);

export {
  Movimentacoes,
  Pessoas,
  MovimentacoesPessoas,
  TipoMovimentacao
};