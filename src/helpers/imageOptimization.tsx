import fs from 'fs';
import path from 'path';

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
    const slug = `${baseName}-${Math.floor(Math.random() * 1000000 + 1)}`;
    const location = `${slug}${extension}`;
    return {
        fileName,
        baseName,
        slug,
        location,
        extension,
    };
};

export const storeImage = (image: ImageFile, resp: any): Promise<ImageFile> =>
    new Promise((resolve, reject) => {
        console.log(path.join(`src/images/${image.slug}.${image.extension}`));
        const fileStream = fs.createWriteStream(
            path.join(`src/images/${image.slug}.${image.extension}`)
        );
        if (!resp || !resp.body) {
            reject('no body on fetch response');
        } else {
            resp.body.pipe(fileStream);
            fileStream.on('finish', () => {
                resolve(image);
            });
            fileStream.on('error', (err) => {
                reject(err);
            });
        }
    });
