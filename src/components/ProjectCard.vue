<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-header">
        <p
          class="card-header-title"
          v-html="project.title.toUpperCase()"
        />
        <a
          v-if="project.repo_link"
          :href="project.repo_link"
          target="_blank"
          class="card-header-icon"
        >
          <span class="icon">
            <fa :icon="['fab', 'github']" />
          </span>
        </a>
        <a
          v-if="project.live_link"
          :href="project.live_link"
          target="_blank"
          class="card-header-icon"
        >
          <span class="icon">
            <fa icon="globe" />
          </span>
        </a>
      </div>
      <div
        class="card-content"
        v-html="project.content"
      />
      <div class="card-footer">
        <div class="card-footer-item tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="tag is-rounded"
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
      },
    },
  },
};
</script>
