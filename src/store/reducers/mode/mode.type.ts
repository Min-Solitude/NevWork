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
    header: Header | null;
};

export type Greetings = {
    content: string;
    status: boolean;
    title: string;
    image: string;
    layout: boolean;    
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

export type Header = {
    btnDarkMode: boolean;
    btnFullScreen: boolean;
    btnNotice: boolean;
    layout: boolean;
    logo: string;
    profile: boolean;
    status: boolean;
}