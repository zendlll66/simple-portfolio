// src/pages/PostPage.jsx
import React, { useEffect, useState } from 'react'
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from '../api/postApi'

const PostPage = () => {
  const [posts, setPosts] = useState([])
  const [form, setForm] = useState({ title: '', body: '', userId: 1 })
  const [editId, setEditId] = useState(null)

  const fetchPosts = async () => {
    const res = await getPosts()
    setPosts(res.data.slice(0, 10)) // จำกัดแค่ 10 อัน
  }
 
  useEffect(() => {
    fetchPosts()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (editId) {
      await updatePost(editId, form)
    } else {
      await createPost(form)
    }
    setForm({ title: '', body: '', userId: 1 })
    setEditId(null)
    fetchPosts()
  }

  const handleEdit = (post) => {
    setForm(post)
    setEditId(post.id)
  }

  const handleDelete = async (id) => {
    await deletePost(id)
    fetchPosts()
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        {editId ? 'Edit Post' : 'Create Post'}
      </h2>
      <input
        className="border px-3 py-1 w-full mb-2"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <textarea
        className="border px-3 py-1 w-full mb-2"
        name="body"
        placeholder="Body"
        value={form.body}
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleSubmit}
      >
        {editId ? 'Update' : 'Add'}
      </button>

      <hr className="my-6" />

      <h2 className="text-xl font-bold mb-2">Post List</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border p-2 mb-2 rounded bg-gray-50 flex justify-between"
        >
          <div>
            <strong>{post.title}</strong>
            <p className="text-sm">{post.body}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="text-sm text-green-600"
              onClick={() => handleEdit(post)}
            >
              Edit
            </button>
            <button
              className="text-sm text-red-600"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostPage
