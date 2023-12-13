export type NoticeState = {
    listNotice?: Notice[];
    loading?: boolean;
};

export type Notice = {
    content?: string;
    createdAt?: number;
    id?: string;
    status?: string;
    title?: string;
    userId?: string;
};
