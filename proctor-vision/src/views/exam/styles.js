import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    mainContainer: {
        marginTop: "23px",
        color:'white', 
    },
    middleBox: {
        marginTop: "36px", 
    },
    inputField: {
        color:'white',
        width: '265px',
    },
    btnstyle: {
        marginTop:'12px', 
        display: "flex",
        width: '178px',
        alignItems: "left",
    },
    progress: {
        display: 'flex', 
        marginTop: '7px'
    },
    done: {
        color: '#A7F93F', fontSize: '30px', marginRight: '20px'
    },
    fail: {
        color: '#FF5757', 
        fontSize: '30px', 
        marginRight: '20px'
    },
    reload: {
        color: 'rgba(255, 255, 255, 0.523)', 
        fontSize: '30px', 
        marginRight: '20px'
    },
    expense:{
        textAlign:'right',
        marginRight:'50px',
    },
    contentBox: {
        padding:31, 
        height:'auto',
        width:'84%', 
        display:'flex',
        textAlign:'left', 
        margin:'20px auto', 
        backgroundColor: '#232527',
    },
    numberBox: {
        height:'32px',
        width:'32px', 
        margin:'20px auto', 
        backgroundColor: '#232527',
    }
});