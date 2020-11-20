import anime from 'animejs';

export const animateIn = async (target) => {
    await anime({
        targets: target,
        keyframes: [{ translateX: '-100%' }, { translateX: '0%' }],
        duration: 1000,
        // easing: 'easeOutCirc',
        easing: 'cubicBezier(.26,.49,.18,.88)',
    }).finished;
};
export const animateOut = async (target) => {
    await anime({
        targets: target,
        keyframes: [{ translateX: '0%' }, { translateX: '100%' }],
        duration: 1000,
        easing: 'cubicBezier(.26,.49,.18,.88)',
    }).finished;
    anime.set(target, {
        translateX: '-100%',
    });
};
