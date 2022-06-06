import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        marginLeft: '0%',
        paddingTop: '10px',
        width: '560px',
        height: '480px',
        borderRadius: theme.shape.borderRadius,
    },
    list: {
        overflow: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        padding: '20px',
    },

}));