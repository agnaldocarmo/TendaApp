import { LazyPessoas } from "../models";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            screenA: undefined;
            screenB: {
                name: string;
            };
            listaMembros: undefined;
            formUser:{
                pessoa: LazyPessoas
            }
        }
    }
    
}