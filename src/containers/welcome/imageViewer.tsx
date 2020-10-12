import React, { FC, useState } from 'react';
import { css, CSSProp } from 'styled-components';
import ImageControl from '../../components/imageControl';
import { Image } from '../../services/welcome.services';

const styles = {
    root: css`
        width: 478px;
        height: 717px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    `,
    imageControl: css`
        position: absolute;
        bottom: 100px;
        right: -20px;
        z-index: 10;
    `,
};

export interface ImageViewerProps {
    images: Image[];
    css?: CSSProp;
}

const ImageViewer: FC<ImageViewerProps> = ({ images, ...props }) => {
    const [currentImage, setCurrentImage] = useState(0);
    console.log(require(`../../../pages/images/${images[currentImage].url.location}?lqip-colors`))
    return (
        <div>
            <img
                css={[
                    styles.root,
                    css`
                        background-color: ${require(`../../../pages/images/${images[currentImage].url.location}?lqip-colors`)[0]};
                    `,
                ]}
                src={require(`../../../pages/images/${images[currentImage].url.location}?resize&size=10000`)}
                {...props}
            />
            <ImageControl
                current={currentImage}
                images={images}
                handleChange={setCurrentImage}
                css={styles.imageControl}
            />
        </div>
    );
};

export default ImageViewer;
