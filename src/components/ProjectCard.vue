<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title" v-html="project.title.toUpperCase()" />
        <a
          :href="project.repo_link"
          target="_blank"
          class="card-header-icon"
          v-if="project.repo_link"
        >
          <span class="icon">
            <fa :icon="['fab', 'github']" />
          </span>
        </a>
        <a
          :href="project.live_link"
          target="_blank"
          class="card-header-icon"
          v-if="project.live_link"
        >
          <span class="icon">
            <fa icon="globe" />
          </span>
        </a>
      </div>
      <div class="card-content" v-html="project.content" />
      <div class="card-footer">
        <div class="card-footer-item tags">
          <span
            class="tag is-rounded"
            v-for="tag in project.tags"
            :key="tag"
            v-html="tag"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
