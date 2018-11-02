function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const hasActionProp = Object.prototype.hasOwnProperty.call(
      handlers,
      action.type
    );
    if (hasActionProp) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

function updateObject(oldObject, newObject) {
  return Object.assign({}, oldObject, newObject);
}

export { createReducer, updateObject };
