const initialState = {
  message: 'Hello World',
}

export default function(state = initialState, action) {
  switch (action.type) {
      default: {
          return {...state}
      }
  }
}
