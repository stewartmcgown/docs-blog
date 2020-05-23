import { GoogleToken, TokenData } from 'gtoken';
import { google } from 'googleapis'
import dotenv from 'dotenv'


export const getAuth = async (): Promise<any> => {
    if (!process.env.GOOGLE_ROOT) {
        // Attempt to load via dotenv
        dotenv.config()
        if (!process.env.GOOGLE_ROOT) throw new Error('No Google Root specified')
    }

    if (!process.env.GOOGLE_EMAIL) throw new Error('No service account email was provided!')
    if (!process.env.GOOGLE_PK) throw new Error('No service account private key was provided!')

    const gtoken = new GoogleToken({
        email: process.env.GOOGLE_EMAIL,
        scope: ['https://www.googleapis.com/auth/documents.readonly', 'https://www.googleapis.com/auth/drive.readonly'], // or space-delimited string of scopes
        key: process.env.GOOGLE_PK
    });

    await gtoken.getToken()

    const auth = new google.auth.Compute({
        serviceAccountEmail: process.env.GOOGLE_EMAIL,
    })

    auth.setCredentials({
        refresh_token: gtoken.refreshToken,
        access_token: gtoken.accessToken,

    })

    return auth;
}