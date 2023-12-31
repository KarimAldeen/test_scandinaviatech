

export const getColor = (color: string) => {
    return (
        getComputedStyle(document.querySelector(':root') as any)?.getPropertyValue(color)

    )
}




export const setColor = (color: string, value: string) => {
    document.documentElement.style.setProperty(color, value);
};
