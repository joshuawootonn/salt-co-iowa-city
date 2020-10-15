import React, { FC, useState } from 'react';
import { css, CSSProp } from 'styled-components/macro';
import ImageControl from '../../components/imageControl';
import GatsbyImage from 'gatsby-image';
import { Image } from '../../services/welcome.services';

const styles = {
    root: css`
        width: 478px;
        height: 717px;
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

    return (
        <div css={styles.root}>
            <GatsbyImage
                css={styles.root}
                fluid={images[currentImage].fluid}
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
