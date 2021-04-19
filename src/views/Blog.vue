<template>
  <div class="m-3 font-mono">
    <div class="m-3 font-mono">
      <h1>Author</h1>
      <div>Name: {{ author.name }} - {{ author.email }}</div>
    </div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">Post: {{ post.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Post from "@/store/models/posts";
import User from "@/store/models/user";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    Post.insert({
      data: [
        {
          id: 1,
          title: "Hello, world!",
          body: "Some awesome body...",
          author: {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
          },
        },
        {
          id: 2,
          title: "Goodbye, world!",
          body: "Another awesome body...",
          author: {
            id: 2,
            name: "Bill Smith",
            email: "bill@example.com",
          },
        },
      ],
    });
  },
  components: {},
  computed: {
    posts() {
      return Post.all();
    },
    author() {
      return User.query().where("name", "John Doe").first();
    },
  },
});
</script>
