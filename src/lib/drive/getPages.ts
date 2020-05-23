import { google } from 'googleapis'
import { getAuth } from './token'

export interface Page {
    id: string;

    name: string;

    published: boolean;

    date: string;
}

export const getPages = async (): Promise<Page[]> => {
    const auth = await getAuth();

    const pages = await google.drive('v3').files.list({
        q: `'${process.env.GOOGLE_ROOT}' in parents`,
        fields: 'files(createdTime,id,name)',
        auth
    });

    return pages.data.files.map(f => ({
        date: f.createdTime,
        id: f.id,
        name: f.name,
        published: true
    }));
}

export const getDoc = async (id: string) => {
    const auth = await getAuth();

    const page = await google.docs('v1').documents.get({
        documentId: id,
        fields: 'title',
        auth
    });

    return page.data;
}