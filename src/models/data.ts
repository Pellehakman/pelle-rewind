export interface Match {
    matchId: number;
    matchName: string;
    winner: string;
    date: string;
    time: string;
};

export interface User {
	fullName: string;
    email: string;
	adress: string;
    zipcode: number;
    about: string;
    extra: string;
    userId: number;
};