import React from 'react';
import styled from 'styled-components/macro';

const Img = styled.img`
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;
`;

const Image = (props) => {
    // handle load is only called when the real image is loaded
    const handleLoad = () => props.onLoad && props.isVisible && props.onLoad();

    return (
        <picture {...props}>
            {props.isVisible ? (
                <>
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
                </>
            ) : (
                <Img {...props} src={props.fluid.base64} />
            )}
        </picture>
    );
};

export default Image;
