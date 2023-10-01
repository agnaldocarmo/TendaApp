export const schema = {
    "models": {
        "Movimentacoes": {
            "name": "Movimentacoes",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "TipoMovimentacao": {
                    "name": "TipoMovimentacao",
                    "isArray": false,
                    "type": {
                        "enum": "TipoMovimentacao"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Valor": {
                    "name": "Valor",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Pessoas": {
                    "name": "Pessoas",
                    "isArray": true,
                    "type": {
                        "model": "MovimentacoesPessoas"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "movimentacoes"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Movimentacoes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Pessoas": {
            "name": "Pessoas",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nome": {
                    "name": "nome",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "data_nasc": {
                    "name": "data_nasc",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "cpf": {
                    "name": "cpf",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "telefone": {
                    "name": "telefone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "movimentacoess": {
                    "name": "movimentacoess",
                    "isArray": true,
                    "type": {
                        "model": "MovimentacoesPessoas"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pessoas"
                        ]
                    }
                },
                "urlFoto": {
                    "name": "urlFoto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Pessoas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MovimentacoesPessoas": {
            "name": "MovimentacoesPessoas",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "movimentacoesId": {
                    "name": "movimentacoesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "pessoasId": {
                    "name": "pessoasId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "movimentacoes": {
                    "name": "movimentacoes",
                    "isArray": false,
                    "type": {
                        "model": "Movimentacoes"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "movimentacoesId"
                        ]
                    }
                },
                "pessoas": {
                    "name": "pessoas",
                    "isArray": false,
                    "type": {
                        "model": "Pessoas"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "pessoasId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MovimentacoesPessoas",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byMovimentacoes",
                        "fields": [
                            "movimentacoesId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPessoas",
                        "fields": [
                            "pessoasId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "TipoMovimentacao": {
            "name": "TipoMovimentacao",
            "values": [
                "DIZIMO",
                "DIZIMO_ELETRONICO",
                "OFERTA",
                "OFERTA_ELETRONICA",
                "DESPESA"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.3",
    "version": "41f6fa60569e361541c2433e5d855168"
};