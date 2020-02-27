import {
    StyleSheet
} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: '#E6E6E6',
    },
    listContainer: {
        alignItems: 'center',
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 5,
        backgroundColor: 'white',
        flexBasis: '46%',
        marginHorizontal: 5,
    },

    userImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        borderColor: '#DCDCDC',
        borderWidth: 3,
    },
});