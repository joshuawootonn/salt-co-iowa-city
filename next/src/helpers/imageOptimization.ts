import path from 'path';
import * as fs from 'fs';
import { deepMapAsync } from './deepMap';

export interface ImageFile {
    extension: string;
    baseName: string;
    slug: string;
    location: string;
    fileName: string;
}

export const convertToImage = (fileName: string): ImageFile => {
    const extension = path.extname(fileName);
    const baseName = path.basename(fileName, extension);
    const slug = `${baseName}`;
    const location = `${slug}${extension}`;
    return {
        fileName,
        baseName,
        slug,
        location,
        extension,
    };
};

export const storeImage = (
    fileLocation: string,
    resp: any
): Promise<ImageFile> =>
    new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(fileLocation);
        if (!resp || !resp.body) {
            reject('no body on fetch response');
        } else {
            resp.body.pipe(fileStream);
            fileStream.on('finish', () => {
                resolve();
            });
            fileStream.on('error', (err) => {
                reject(err);
            });
        }
    });

export const processImage = async (url: string) => {
    const fileName = url.split('/').pop();
    if (!fileName) return url;
    const image = convertToImage(fileName);
    const fileLocation = path.resolve(
        `pages/images/${image.slug}${image.extension}`
    );
    if (fs.existsSync(fileLocation)) return image;

    const response = await fetch(url);

    await storeImage(fileLocation, response);
    return image;
};

export const findImagesAndConvert = async (response: any) =>
    deepMapAsync(response, async (val: any, key: string) =>
        key === 'url' ? processImage(val) : val
    );
