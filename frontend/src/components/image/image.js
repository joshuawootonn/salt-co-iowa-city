import React from 'react';
import styled from 'styled-components/macro';

const Img = styled.img`
    position: absolute;
    top: 0.1%;
    left: 0.1%;
    width: 99.8%;
    height: 99.8%;

    object-fit: cover;
    object-position: center;
`;

const Image = (props) => {
    if (props.isVisible) {
        return null;
    }

    const handleLoad = () => {
        props.onLoad && props.onLoad();
    };

    return (
        <picture {...props}>
            {props.fluid.srcSetWebp && (
                <source
                    type="image/webp"
                    media={props.fluid.media}
                    srcSet={props.fluid.srcSetWebp}
                    sizes={props.fluid.sizes}
                />
            )}
            {props.fluid.srcSet && (
                <source
                    media={props.fluid.media}
                    srcSet={props.fluid.srcSet}
                    sizes={props.fluid.sizes}
                />
            )}
            <Img {...props} src={props.fluid.src} onLoad={handleLoad} />
        </picture>
    );
};

export default Image;
