// Base URL for your API
export const BASE_URL = 'http://localhost:8080/api';

// Auth routes
export const LOGIN_URL = `${BASE_URL}/auth`;

// Todo routes
const TODOS_URL = `${BASE_URL}/todos`;
export const GET_ALL_TODOS = TODOS_URL;
export const ADD_TODO = TODOS_URL;
export const GET_TODO_BY_ID = (id: number): string => `${TODOS_URL}/${id}`;
export const DELETE_TODO = (id: number): string => `${TODOS_URL}/${id}`;
export const UPDATE_TODO = (id: number): string => `${TODOS_URL}/${id}`;
