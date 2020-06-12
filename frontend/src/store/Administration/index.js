const INITIAL_STATE = {
    current: 0,
    create: {
        value: 0,
        show: "flex"
    },
    deleter: {
        value:6,
        show:"flex"
    },
    update:{
        value:  1,
        shhow: "flex"
    }
}

function reducer(state = INITIAL_STATE, action) {

    if (action.type === "SET_NAVIGATION") {
        return { ...action.navigation }
    }

    return state
}

export const setNavigation = (navigation) => {
    return {
        type: "SET_NAVIGATION",
        navigation
    }
}

export default reducer