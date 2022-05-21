const actionTypes = Object.freeze({
    //get home page
    GET_HOME_SUCCESS: "GET_HOME_SUCCESS",
    GET_HOME_FAIL: "GET_HOME_FAIL",
    GET_HOME2_SUCCESS: "GET_HOME2_SUCCESS",
    GET_HOME2_FAIL: "GET_HOME2_FAIL",
    GET_HOME3_SUCCESS: "GET_HOME3_SUCCESS",
    GET_HOME3_FAIL: "GET_HOME3_FAIL",
    GET_CHART_HOME_SUCCESS: "GET_CHART_HOME_SUCCESS",
    GET_CHART_HOME_FAIL: "GET_CHART_HOME_FAIL",

    //player
    PAUSE_PLAYER: "PAUSE_PLAYER",
    PLAY_PLAYER: "PLAY_PLAYER",

    //search
    CHANGE_KEYWORD: "CHANGE_KEYWORD",

    // user
    LOGIN: 'LOGIN',
    LOG_OUT: 'LOG_OUT',
    UPDATE_RECENT: 'UPDATE_RECENT',
    REFRESH_PLAY: 'REFRESH_PLAY',
    REFRESH: 'REFRESH'
})

export default actionTypes