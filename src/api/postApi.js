// src/api/postApi.js
import axiosInstance from './axiosInstance'

export const getPosts = () => axiosInstance.get('/posts')

export const getPostById = (id) => axiosInstance.get(`/posts/${id}`)

export const createPost = (post) => axiosInstance.post('/posts', post)

export const updatePost = (id, updatedPost) =>
    axiosInstance.put(`/posts/${id}`, updatedPost)

export const deletePost = (id) => axiosInstance.delete(`/posts/${id}`)
