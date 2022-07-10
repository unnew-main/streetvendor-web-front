const key = {
    idSession: 'ID_TOKEN',
};

export const sessionService = {
    getIdSession: async () => localStorage.getItem(key.idSession) ?? '',
    setIdSession: (session: string) => localStorage.setItem(key.idSession, session),
};
