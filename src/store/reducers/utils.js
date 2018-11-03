// boilerplate function used in this pattern
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

// Boilerplate code that is used for creating a copy of state
function updateObject(oldObject, newObject) {
  return Object.assign({}, oldObject, newObject);
}

// This function generates a new item for the list
function generateNewItem() {
  // generating random string for a unique id
  const id = Math.random()
    .toString(36)
    .substr(2, 9);

  return {
    id,
    name: 'New Item',
    price: '0.00',
    quantity: '0',
  };
}

function updateItem(state, itemData) {
  const { id, field, value } = itemData;
  console.log('state', state);

  const newState = state.map(item => {
    if (item.id === id) {
      return { ...item, [field]: value };
    }
    return item;
  });

  return newState;
}

export { createReducer, updateObject, generateNewItem, updateItem };
