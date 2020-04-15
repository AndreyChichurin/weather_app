import { SHOW_LOADER, FETCH_WEATHER } from "../types"

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [FETCH_WEATHER]: (state, { payload }) => ({ ...state, weather: payload, loading: false }),
  DEFAULT: state => state
}

export const weatherReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
