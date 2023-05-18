const COLORS = {
    white: "#ffffff",
    black: "#333333",
    lightGrey: "#f5f5f5",
    mediumGrey: "#6D6F6D",
};

const VARIANTS = {
    card: {
        open: {},
        closed: {},
    },
    cardText: {
        open: { color: COLORS.black },
        closed: { color: COLORS.black },
    },
    cardDetails: {
        open: { height: "auto" },
        closed: { height: 0, overflow: "hidden" },
    },
    arrow: {
        open: { rotate: 60 },
        closed: { rotate: 0 },
    },
    arrowPath: {
        open: { fill: COLORS.mediumGrey },
        closed: { fill: COLORS.mediumGrey },
    },
    checkbox: {
        open: {},
        closed: {},
    },
};

const STYLES = {
    card: {
        open: "w-screen h-16 flex justify-between items-center bg-Green3 shadow-md",
        closed: "w-screen h-16 flex justify-between items-center bg-white shadow-md",
    },
    cardTextContainer: "w-full h-16 flex p-4 items-center gap-4",
    checkboxContainer: "px-8 py-4",
    checkbox: "p-1 rounded checked:text-Green4 focus:outline-Green4",
    cardDetails: "bg-white shadow-md",
    cardDetailsButtonContainer: "flex justify-end",
    cardDetailsEditButton: "px-8 py-4 text-Green4 font-bold",
    cardDetailsDeleteButton: "px-8 py-4 text-Red1 font-bold",
};

export { COLORS, VARIANTS, STYLES };
