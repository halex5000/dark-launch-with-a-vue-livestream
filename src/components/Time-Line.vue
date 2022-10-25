<template>
  <v-timeline direction="horizontal">
    <v-timeline-item
      v-for="milestone in milestones"
      :dot-color="milestone.color"
      icon="mdi-home"
      ><v-card>
        <v-card-title>
          {{ milestone.title }}
        </v-card-title>
        <v-card-content>
          {{ milestone.description }}
        </v-card-content>
      </v-card></v-timeline-item
    >
  </v-timeline>
</template>

<script setup>
import { useLDFlag } from "launchdarkly-vue-client-sdk";
import { ref } from "vue";

const milestones = ref([
  {
    color: "red-lighten-2",
    icon: "star",
    description: "",
    title: "",
  },
  {
    color: "purple-lighten-2",
    icon: "mdi-book-variant",
    description: "",
    title: "",
  },
  {
    color: "green-lighten-1",
    icon: "mdi-airballoon",
    description: "",
    title: "",
  },
  {
    color: "indigo-lighten-2",
    icon: "mdi-buffer",
    description: "",
    title: "",
  },
]);

// const milestones = useLDFlag("milestones", []);

console.log(milestones.value);
</script>
