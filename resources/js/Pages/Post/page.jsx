import React from 'react'

export default function Post({ posts }) {
  return (
    <div class="row-xl" style={{ padding: '10px' }}>
      <div class="col-md-12">
        <div class="card shadow-sm mb-4">
          <div class="card-header d-flex align-items-center justify-content-between">
            <h5 class="mb-0"> Data Posts </h5>

          </div>

          <div class="card-body">
            <a href={route('posts.create')} class="btn btn-md btn-success">Tambah Data Post</a>
            <hr />
            <div class="table-responsive">
              <div class="mb-3">
                <input type="text" placeholder="Pencarian..." class="form-control" />
              </div>
              <table class="table table-bordered table-striped">
                <thead class="bg-dark text-white">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                      <a href="#">Title</a>
                      {/* @if ($sortField === 'title')
                                    <span>{{ $sortDirection === 'asc' ? '↑' : '↓' }}</span>
                                    @endif */}
                    </th>
                    <th scope="col">
                      <a href="#">Content</a>
                      {/* // @if ($sortField === 'content')
                                    // <span>{{ $sortDirection === 'asc' ? '↑' : '↓'}}</span>
                                    // @endif */}
                    </th>
                    <th scope="col" style={{ width: '20%' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts ? posts.map(post => (
                    <tr>
                      <td class="text-center">
                        <img src="" class="rounded" style={{ width: '150px' }} />
                      </td>
                      <td>{post.title}</td>
                      <td>{post.content}</td>
                      <td class="text-center">
                        <a href="{{ route('posts.show', $post->id) }}" wire:navigate class="btn btn-sm btn-success">Lihat</a>
                        <a href="{{ route('posts.edit', $post->id) }}" wire:navigate class="btn btn-sm btn-primary">Edit</a>
                        <button class="btn btn-sm btn-danger" wire:click="confirmDelete({{ $post->id }})">Delete</button>
                      </td>
                    </tr>
                  )) : (
                    <div class="alert alert-danger">
                      Data Post belum Tersedia.
                    </div>
                  )}
                </tbody>
              </table>
              {/* {{ $posts->links() }} */}
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
