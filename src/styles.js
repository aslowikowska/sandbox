export const appColors = {
    error: '#BF352F',
    primary: '#ffeed7',
    green: '#88A34F',
    darkGreen: '#224732',
    dark: '#132326'
};

export const appFont = "'Roboto', sans-serif";

export default {
    appFont: {
        fontFamily: appFont,
        color: appColors.dark
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    centerItalic: {
        textAlign: 'center',
        fontStyle: 'italic'
    },
    appBar: {
        backgroundColor: appColors.dark
    },
    appBarTitle: {
        color: appColors.primary,
        fontFamily: appFont,
        fontSize: '1.75em'
    },
    sideBar: {
        backgroundColor: appColors.dark,
        fontFamily: appFont,
        fontSize: '1.1em'
    },
    input: {
        display: 'block',
        marginBottom: '5px',
        fontFamily: appFont,
        color: appColors.dark
    },
    link: {
        color: appColors.primary,
        fontFamily: appFont,
        fontSize: '1.15em',
        textDecoration: 'none',
        margin: '1em 0'
    },
    dashboard: {
        fontFamily: appFont,
        color: appColors.dark,
        padding: '40px',
        width: '80vw',
        margin: '50px auto 0 auto'
    },
    containerLogin: {
        width: '50vw',
        height: '50vh',
    },
    item: {
        padding: '5%',
        textAlign: 'center'
    },
    inputLogin: {
        width: '100%',
        marginBottom: '10px'
    },
    buttonLogin: {
        margin: '10px'
    }
}