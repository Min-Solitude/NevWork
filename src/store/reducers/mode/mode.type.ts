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
};

export type Greetings = {
    content: string;
    status: boolean;
    title: string;
};
