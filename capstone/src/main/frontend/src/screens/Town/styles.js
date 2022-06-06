import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    editbtn: {
        position: 'fixed',
        bottom: '25px',
        right: '70px',
    },
    deletebtn: {
        position: 'fixed',
        bottom: '25px',
        right: '30px',
    },
    cheifdelete: {
        position: 'fixed',
        top: '300px', left: '355px'
    },
    closebtn: {
        position: 'fixed',
        top: '300px', left: '389px'
    },
    title: {
        fontWeight: '800'
    },
    input: {
        margin: '4px',
        border: 'none',
        height: '27px',
        width: '250px',
        borderRadius: '10px',

    },
    inputbtn: {
        margin: '7px',
        fontWeight: "800"
    },
    titlee: {
        fontWeight: '790',
      },
    search: {
        display: 'none',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.35) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginRight: theme.spacing(3), width: 'auto', display: 'block', },
    },
    searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        display: 'flex', justifyContent: 'space-between',
    },
    logoutButton: {
        height: '30px', width: '80px', color: alpha(theme.palette.common.white, 0.5),
        margin : theme.spacing(1, 1),
    },
}));