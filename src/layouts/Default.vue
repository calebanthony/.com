<template>
  <div id="app">
    <div class="nav-wrapper" role="navigation" aria-label="primary navigation">
      <div class="nav level is-mobile">
        <div class="level-left">
          <Logo />
        </div>
        <div class="level-item">
          <g-link class="card-image" to="/projects">
            Projects
          </g-link>
        </div>
        <div class="level-right">
          <a class="level-item" href="//github.com/calebanthony/">
            <span class="icon">
              <fa :icon="['fab', 'github']" size="lg" />
            </span>
          </a>
          <a
            class="level-item"
            href="//stackoverflow.com/users/6646558/caleb-anthony?tab=profile"
          >
            <span class="icon">
              <fa :icon="['fab', 'stack-overflow']" size="lg" />
            </span>
          </a>
          <a class="level-item" href="//www.linkedin.com/in/calebanthony/">
            <span class="icon">
              <fa :icon="['fab', 'linkedin-in']" size="lg" />
            </span>
          </a>
        </div>
      </div>
    </div>

    <main class="section">
      <slot />
    </main>

    <footer class="footer has-text-centered">
      <span>Built by Caleb</span>
      <span> | </span>
      <span>
        Powered by <a href="//gridsome.org" target="_blank"> Gridsome </a>
      </span>
      <span> | </span>
      <span>Hosted by <a href="//zeit.co" target="_blank">ZEIT</a></span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data: () => ({
    showNav: false
  })
};
</script>
