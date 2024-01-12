export enum EnumErrors {
    // Erros de email
    EMAIL_REQUIRED = 'O email é obrigatório',
    EMAIL_REQUIRED_STRING = 'O email deve ser uma string',
    INVALID_EMAIL = 'O email deve ser válido',
    PARAM_INVALID_EMAIL = 'O parâmetro email informado é inválido',
    INVALID_EMAIL_OR_PASSWORD = 'Email ou senha inválidos',
    EMAIL_ALREADY_EXISTS = 'Email já cadastrado',

    // Erros de senha
    PASSWORD_REQUIRED = 'A senha é obrigatória',
    PASSWORD_MIN_LENGTH = 'A senha deve ter no mínimo 8 caracteres',

    // Erros de nome
    NAME_REQUIRED = 'O nome é obrigatório',
    NAME_REQUIRED_STRING = 'O nome deve ser uma string',
    NAME_COMPOUND = 'O nome deve ser composto por nome e sobrenome',

    // Erros de usuário
    USER_NOT_FOUND = 'Usuário não encontrado',

    // Errors de token
    TOKEN_NOT_FOUND = 'Token não encontrado',
    TOKEN_INVALID = 'Token inválido',

    // Erros Servidor
    FAILED_START_SERVER = 'Falha ao iniciar o servidor, erro: ',

    // Erros de rules
    ACTION_NOT_FOUND = 'A ação informada não foi encontrada',
    SUBJECT_NOT_FOUND = 'O subject informado não foi encontrado',
    ACTION_REQUIRED_STRING = 'A ação deve ser uma string',
    SUBJECT_REQUIRED_STRING = 'O subject deve ser uma string',
    RULE_LIST_REQUIRED = 'A lista de rules é obrigatória',
    RULE_LIST_REQUIRED_NUMBER = 'A lista de rules deve ser um array',
    RULE_LIST_REQUIRED_NUMBER_EACH = 'Cada id deve ser um número',
    RULE_NOT_FOUND = 'A rule informada não foi encontrada',
}
