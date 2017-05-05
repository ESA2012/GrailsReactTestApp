import { SERVER_URL } from '../config';

export function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const { types, request } = action;

    if (!types) {
      // Normal action: pass it on
      return next(action)
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    const [ requestType, successType, failureType ] = types;

    dispatch(Object.assign({}, request.payload, {
      type: requestType
    }));

    const options = {
      method: request.method,
      headers: request.method === 'POST' ? {'Accept': 'application/json', 'Content-Type': 'application/json'} : null,
      body: typeof request.payload !== 'string' ? JSON.stringify(request.payload) : request.payload
    };

    return fetch(`${SERVER_URL}${request.url}`, options)
      .then(response => response.json())
      .then(
        body => dispatch(Object.assign({}, request.payload, { body, type: successType })),
        error => dispatch(Object.assign({}, request.payload, { error, type: failureType }))
      )
  }
}