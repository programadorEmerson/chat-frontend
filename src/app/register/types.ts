type TranslationKeys = {
    name: string;
    urlImage: string;
    email: string;
    password: string;
    confirmPassword: string;
    companyName: string;
    companyDocument: string;
    companyEmail: string;
    companyEmailInvalid: string;
    companyPhone: string;
    companyAdress: string;
    companyCity: string;
    companyCityInfor: string;
    companyState: string;
    companyStateInfor: string;
    companyZipCode: string;
};

type Translations = {
    pt_BR: TranslationKeys;
    en_US: TranslationKeys;
};

export type { Translations, TranslationKeys };
