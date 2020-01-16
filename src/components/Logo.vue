<template>
  <g-link class="level-item is-paddingless" to="/">
    <figure class="image">
      <g-image
        src="~/assets/images/logo.png"
        :alt="$static.metadata.siteName"
        width="100"
        immediate="true"
      />
    </figure>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
