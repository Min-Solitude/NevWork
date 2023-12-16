export type ModeState = {
    theme: string;
    nameScreen: string;
    isNotice: boolean;
    isClock: boolean;
    isShowPopupManagerImage: boolean;
    kindScreen: boolean;
    isGreetings: boolean;
    greetings: Greetings | null;
    isTabYoutube: boolean;
    isNote: boolean;
    isLink: boolean;
    isListNote: Note[];
    isListLink: string[];
};

export type Greetings = {
    content: string;
    status: boolean;
    title: string;
};

export type Note = {
    value: number;
    content: string;
    kind: string;
};
