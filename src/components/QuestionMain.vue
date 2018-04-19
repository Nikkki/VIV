<template>
  <section>
  
    <v-layout column>
  
      <v-card class="elevation-4 mb-2 py-3 px-4" v-for="question in questions">
        <h3 class="text-sm-left">
          {{question.numb}}. {{question.question}}

        </h3>
        <p class=" pl-2 pt-2 text-sm-left">
          {{question.answer}}
        </p>
        <ol class="text-sm-left pl-2 " v-for="(sup, index) in question.sups">
          {{index}}<li class="card-link" v-for="link in sup"> 
            <a target="_blank" :href=link.link>{{link.text}} </a>
          </li>
        </ol>

      </v-card>
      <v-card class="py-3 grey  lighten-2">
        <h1>to be continued</h1>
      </v-card>
  
    </v-layout>
  
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      questions: "questions"
    })
  },
  methods: {
    random() {
      return Math.random();
    }
  }
};
</script>

<style scoped>
.card-link {
  margin: 5px;
}
.card-link a {
  padding: 6px;
}
</style>

