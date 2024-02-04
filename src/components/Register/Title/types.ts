type TranslationKeys = {
    title: string;
};

type Translations = {
    pt_BR: TranslationKeys;
    en_US: TranslationKeys;
};

export type AlignProps = 'left' | 'center' | 'right';

type TitleProps = {
    title: string
    align: AlignProps
}

export type { Translations, TitleProps, TranslationKeys };
