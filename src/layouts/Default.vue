<template>
  <div id="app">
    <div
      class="nav level is-mobile"
      role="navigation"
      aria-label="primary navigation"
    >
      <div class="level-left">
        <Logo v-if="showLogo" />
      </div>
      <div class="level-right">
        <a class="level-item" href="//github.com/calebanthony/">
          <span class="icon is-medium">
            <fa :icon="['fab', 'github']" size="2x" />
          </span>
        </a>
        <a
          class="level-item"
          href="//stackoverflow.com/users/6646558/caleb-anthony?tab=profile"
        >
          <span class="icon is-medium">
            <fa :icon="['fab', 'stack-overflow']" size="2x" />
          </span>
        </a>
        <a class="level-item" href="//www.linkedin.com/in/calebanthony/">
          <span class="icon is-medium">
            <fa :icon="['fab', 'linkedin-in']" size="2x" />
          </span>
        </a>
      </div>
    </div>

    <main class="section">
      <slot />
    </main>

    <footer class="footer has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showNav: false
  })
};
</script>
