<template>
    <section>
        <v-layout column>
            <template v-for="(question,index) in questions">
                <v-list-tile :key="index" >
                   {{question.question}} 
                </v-list-tile>

        <v-divider > </v-divider>
            </template>
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
  }
};
</script>

<style>

</style>

