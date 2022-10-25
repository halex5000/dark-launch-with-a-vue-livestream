<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(milestone, i) in milestones"
      :key="i"
      :dot-color="milestone.color"
      size="small"
    >
      <template #opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${milestone.color}`"
        ></div>
      </template>
      <div>
        <h2
          :class="`mt-n1 headline font-weight-light mb-4 text-${milestone.color}`"
        >
          {{ milestone.title }}
        </h2>
        <div>{{ milestone.description }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    milestones: [
      {
        color: "cyan",
        title: "Powered by LaunchDarkly",
        description: "Feature management enabled",
      },
      {
        color: "green",
        title: "QR Code Available",
        description: "Boolean flag use",
      },
      {
        color: "pink",
        title: "QR Code Color",
        description: "Targeting with metadata",
      },
      {
        color: "amber",
        title: "Theme switching enabled",
        description: "Theme options coming from LaunchDarkly",
      },
      {
        color: "orange",
        title: "2000",
        description: "2000",
      },
    ],
  }),
};
</script>
