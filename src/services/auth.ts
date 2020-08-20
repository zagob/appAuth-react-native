interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'laksjdajkdouqhwen234',
                user: {
                    name: 'Matheus',
                    email: 'mat@gmail.com',
                },
            });
        }, 2000);
    });
}