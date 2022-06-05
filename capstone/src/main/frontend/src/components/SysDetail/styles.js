import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        position: 'relative',
        top: '10px',
        left: '20px',
        width: '350px',
        height: '580px',
        backgroundColor: '#CBCBCB',
        borderRadius: '10px',
        marginBottom: '20px',
    },
    table: {
        width: '400px',
        position: 'relative',
        alignSelf: 'center',
        paddingLeft: '45px',
    },
    logo: {
        width: '300px',
        height: '250px',
        margin: '0px',
        paddingLeft: '47px',
        paddingTop: '10px',
        paddingBottom: '0px',
    },
    tablebox: {
        width: '260px',
    }
}));