export type NoticeState = {
    listNotice?: Notice[];
    loading?: boolean;
    GeneralAnnouncement: GeneralAnnouncement;
};

export type Notice = {
    content?: string;
    createdAt?: number;
    id?: string;
    status?: string;
    title?: string;
    userId?: string;
};

export type GeneralAnnouncement = {
    banner: string;
    content: string;
    email: boolean;
    note: string;
    status: boolean;
    title: string;
};
