<template>
  <Layout>
    <div class="columns is-vcentered">
      <div class="column is-4 is-offset-1 has-text-centered">
        <figure class="image is-square">
          <g-image alt="Author image" src="~/assets/images/author.png" />
        </figure>
      </div>
      <div class="column is-5 is-offset-1">
        <h1 class="title is-1">Hi, I'm Caleb.</h1>
        <p class="subtitle">
          I'm a full-stack web developer (whatever that means). I like building
          websites, apps, and APIs that solve real-world problems. But I also
          like making things just for fun.
        </p>
        <p class="subtitle">
          I like coffee (but not too much), board games, and I love my family.
        </p>
        <p class="subtitle">
          Have a cool idea of something you want to build? I'd love to hear it!
          Just shoot me an
          <a href="mailto:caleb.m.anthony+website@gmail.com">e-mail</a>.
        </p>
      </div>
    </div>
    <div class="section has-recent-projects">
      <h2 class="title is-2">Some of My Projects</h2>
      <div class="columns">
        <ProjectCard
          v-for="edge in $page.projects.edges"
          :key="edge.node.id"
          :project="edge.node"
        />
      </div>
    </div>
    <div class="section has-recent-posts">
      <h2 class="title is-2">Some of My Thoughts</h2>
      <div class="columns">
        <div
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          class="column is-4"
        >
          <PostCard :post="edge.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  projects: allProject(limit: 3, sortBy: "priority") {
    edges {
      node {
        id
        title
        repo_link
        live_link
        tags
        content
      }
    }
  }
  posts: allPost(filter: { published: { eq: true }}, limit: 3, sortBy: "date") {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        // cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    ProjectCard,
    PostCard
  },
  metaInfo: {
    title: "Home"
  }
};
</script>
