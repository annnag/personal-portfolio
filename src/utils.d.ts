export declare const getImageUrl: (path: string) => string;
export declare const fadeIn: (direction: string, type: string, delay: number, duration: number) => {
    hidden: {
        x: number;
        y: number;
        opacity: number;
    };
    show: {
        x: number;
        y: number;
        opacity: number;
        transition: {
            type: string;
            delay: number;
            duration: number;
            ease: string;
        };
    };
};
