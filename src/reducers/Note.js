export default (state, action) => {
    switch (action.type) {
        case "POPULATE_NOTES":
            return action.notes;
        case "ADD_NOTE":
            return [...state, { title: action.title, body: action.body }];
        case "REMOVE_NOTE":
            return state.filter((tempNote, i) => {
                return i !== action.index;
            });
        default:
            return state;
    }
};
