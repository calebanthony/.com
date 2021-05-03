<template>
  <Layout>
    <div class="columns is-multiline">
      <ProjectCard
        v-for="edge in $page.projects.edges"
        :key="edge.node.id"
        :project="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    projects: allProject {
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
  }
</page-query>

<script>
import ProjectCard from '~/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  metaInfo: {
    title: 'Projects',
  },
};
</script>
