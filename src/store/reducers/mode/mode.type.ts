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
    fileTray: FileTray | null;
    isShowFile: boolean;
};

export type Greetings = {
    content: string;
    status: boolean;
    title: string;
};

export type FileTray = {
    title: string;
    status: boolean;
    background: string;
    noticeErr: string;
};

export type Note = {
    value: number;
    content: string;
    kind: string;
};
